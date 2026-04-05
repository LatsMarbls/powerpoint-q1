<script setup>
const quickStats = [
  { label: 'Slides', value: '08' },
  { label: 'Avg. Session', value: '04:20' },
  { label: 'Clarity Score', value: '94%' },
]

const principles = [
  {
    title: 'Minimal by default',
    text: 'Every element has a job. No visual noise, no dead sections.',
  },
  {
    title: 'Built for story flow',
    text: 'Each screen behaves like a clean deck slide with strong hierarchy.',
  },
  {
    title: 'Deploy-ready stack',
    text: 'Vue + Vite with static output, perfect for Vercel hosting.',
  },
]

const slideLabels = ['Intro', 'Signal', 'Work', 'Method', 'Launch']
</script>

<template>
  <main class="deck">
    <aside class="rail" aria-label="Slide navigation">
      <a v-for="label in slideLabels" :key="label" :href="`#${label.toLowerCase()}`">
        {{ label }}
      </a>
    </aside>

    <section id="intro" class="slide hero">
      <p class="eyebrow">Latsmarbls Inspired</p>
      <h1>Powerpoint-style website with modern minimal energy.</h1>
      <p class="lead">
        A focused one-page presentation designed for fast storytelling, subtle motion,
        and confident deployment on Vercel.
      </p>
      <div class="hero-actions">
        <a href="#launch" class="btn btn-solid">Open Final Slide</a>
        <a href="#work" class="btn btn-ghost">Preview Sections</a>
      </div>
    </section>

    <section id="signal" class="slide split">
      <article>
        <p class="eyebrow">Slide 02</p>
        <h2>Signal first, details second.</h2>
        <p>
          The layout keeps attention on your message through wide spacing, bold type,
          and a restrained color palette.
        </p>
      </article>
      <div class="metrics" role="list" aria-label="Key stats">
        <div v-for="stat in quickStats" :key="stat.label" role="listitem" class="metric-card">
          <span>{{ stat.label }}</span>
          <strong>{{ stat.value }}</strong>
        </div>
      </div>
    </section>

    <section id="work" class="slide panel">
      <p class="eyebrow">Slide 03</p>
      <h2>Showcase your projects like a keynote.</h2>
      <div class="showcase-grid">
        <article class="showcase-block accent-a">
          <p>Case Study A</p>
          <h3>Payment platform redesign</h3>
          <small>Clear conversion path with reduced friction.</small>
        </article>
        <article class="showcase-block accent-b">
          <p>Case Study B</p>
          <h3>Developer portfolio narrative</h3>
          <small>From technical details to engaging story flow.</small>
        </article>
      </div>
    </section>

    <section id="method" class="slide panel">
      <p class="eyebrow">Slide 04</p>
      <h2>Principles that keep it sharp.</h2>
      <div class="principles" role="list">
        <article v-for="item in principles" :key="item.title" role="listitem" class="principle-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section id="launch" class="slide outro">
      <p class="eyebrow">Final Slide</p>
      <h2>Ready for Vercel.</h2>
      <p>
        Deploy as a static site in one click. Keep the storytelling format and update
        slide content as your work evolves.
      </p>
      <div class="terminal-like">npm run build && vercel --prod</div>
    </section>
  </main>
</template>
