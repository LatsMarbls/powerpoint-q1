import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

const waitForNextFrame = () => new Promise((resolve) => requestAnimationFrame(resolve))

const waitForAssets = async () => {
  if (document.fonts?.ready) {
    await document.fonts.ready
  }

  await waitForNextFrame()
  await waitForNextFrame()
}

const buildCanvasSlice = (sourceCanvas, startY, sliceHeight) => {
  const sliceCanvas = document.createElement('canvas')
  sliceCanvas.width = sourceCanvas.width
  sliceCanvas.height = sliceHeight

  const context = sliceCanvas.getContext('2d')
  context.drawImage(
    sourceCanvas,
    0,
    startY,
    sourceCanvas.width,
    sliceHeight,
    0,
    0,
    sourceCanvas.width,
    sliceHeight,
  )

  return sliceCanvas
}

export const exportSlidesToPdf = async ({
  rootSelector = '.deck',
  fileName = 'praxxys-journey.pdf',
} = {}) => {
  const root = document.querySelector(rootSelector)

  if (!root) {
    throw new Error(`Export root not found: ${rootSelector}`)
  }

  const slides = Array.from(root.querySelectorAll('.slide'))

  if (slides.length === 0) {
    throw new Error('No slides were found to export.')
  }

  await waitForAssets()

  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const pageWidth = pdf.internal.pageSize.getWidth()
  const pageHeight = pdf.internal.pageSize.getHeight()

  let isFirstPage = true

  for (const slide of slides) {
    const canvas = await html2canvas(slide, {
      backgroundColor: '#ffffff',
      scale: 2,
      useCORS: true,
      scrollX: 0,
      scrollY: -window.scrollY,
      ignoreElements: (element) =>
        element.classList?.contains('rail') || element.classList?.contains('hero-actions'),
    })

    const sliceHeight = Math.floor((canvas.width * pageHeight) / pageWidth)

    let renderedHeight = 0

    while (renderedHeight < canvas.height) {
      const nextSliceHeight = Math.min(sliceHeight, canvas.height - renderedHeight)
      const sliceCanvas = buildCanvasSlice(canvas, renderedHeight, nextSliceHeight)
      const imageData = sliceCanvas.toDataURL('image/png')
      const imageHeight = (nextSliceHeight * pageWidth) / canvas.width

      if (!isFirstPage) {
        pdf.addPage()
      }

      pdf.addImage(imageData, 'PNG', 0, 0, pageWidth, imageHeight)
      isFirstPage = false
      renderedHeight += nextSliceHeight
    }
  }

  pdf.save(fileName)
}