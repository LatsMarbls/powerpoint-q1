<script setup>
import { ref } from 'vue'
import { exportSlidesToPdf } from './utils/exportSlidesToPdf'

const keyLearnings = [
  'Praxxys backend architecture and package structure',
  'Coding standards, patterns, and best practices',
  'System architecture and database design',
  'API development and QA processes',
  'Improved understanding of real-world project workflows',
]

const projectReports = [
  {
    project: 'MotorCentral',
    workload: [
      'Handled majority of backend implementation',
    ],
    bottlenecks: [
      'Initial ramp-up while handling sudden workload increase',
      'Early alignment challenges on project context and expectations',
    ],
    accomplishments: [
      'Developed majority of end-to-end backend features',
      'Successfully completed E2E, currently awaiting client feedback',
    ],
  },
  {
    project: 'Wildflour',
    workload: [
      'Handled backend/API tasks for Informative Pages and QA-related fixes',
      'Took on progressively higher-priority and critical issue tickets',
    ],
    bottlenecks: [
      'Adjustment period while shifting from low-priority to critical tasks',
    ],
    accomplishments: [
      'Contributed to backend/API development in Informative Pages and QA fixes',
      'Progressed from low-priority fixes to handling critical issues',
    ],
  },
  {
    project: 'Personal Collection',
    workload: [
      'Designed system architecture and database schema',
      'Developed Entire backend system and API endpoints for E2E demo',
    ],
    bottlenecks: [
      'Had to manage delivery quality while maintaining speed',
      'Database design due to wordpress schema complexity and lack of prior experience',
    ],
    accomplishments: [
      'Designed system architecture and database schema',
      'Developed backend system',
      'Delivered successful E2E demo and client endorsement',
    ],
  },
]

const personalGrowth = [
  'Improvement in development speed',
  'Increased confidence in tasks',
  'Managed multiple concurrent priorities across active projects',
  'Increased responsibility in handling backend deliverables',
]

const improvementAreas = [
  'Slow debugging turnaround when handling unfamiliar codebases',
  'Limited experience in designing scalable system architecture',
  'Needs improvement in code quality',
  'Difficulty prioritizing tasks under tight deadlines',
  'Needs improvement in making independent technical decisions'
]

const aprilPlans = [
  'Reduce debugging time by reading project documents and analyzing root causes before coding',
  'Study system architecture patterns (MVC, modular design) in current tasks and outside resources',
  'Perform self-code reviews before submitting to QA',
  'Use task prioritization techniques (daily planning + time blocking) to manage workload',
  'Take ownership of at least one feature or task independently from start to finish'
]


const journeyStats = [
  { label: 'Projects Managed', value: '3' },
  { label: 'Main Focus', value: 'Backend Development' },
  { label: 'Report Window', value: 'Jan-Apr' },
]

const aprilCalendar = [
  {
    week: 'Week 1',
    dates: 'Apr 1-3',
    phase: 'Phase 1: E2E Build',
    focus: 'Kickoff E2E implementation for DOXO client demo',
    output: 'Core E2E flow backend completion',
  },
  {
    week: 'Week 2',
    dates: 'Apr 6-8',
    phase: 'Phase 1: E2E Build',
    focus: 'Complete primary feature paths and integration checks',
    output: 'Ecommerce backend completion which is around 60+ hours',
  },
  {
    week: 'Week 3',
    dates: 'Apr 13-17',
    phase: 'Phase 1 Closure',
    focus: 'Finalize E2E behavior and prepare for demo',
    output: 'Loyalty Management and remaining features completion, client demo-ready E2E',
  },
  {
    week: 'Week 4',
    dates: 'Apr 20-24',
    phase: 'Phase 2: QA Refinement',
    focus: 'Fix QA findings and refinement of behavior',
    output: 'Client demo-ready for E2E',
  },
]

const isExporting = ref(false)

const handleExport = async () => {
  if (isExporting.value) return

  isExporting.value = true

  try {
    await exportSlidesToPdf()
  } catch (error) {
    console.error('PDF export failed', error)
    window.alert('Export failed. Please try again.')
  } finally {
    isExporting.value = false
  }
}

const getPhaseClass = (phase) => {
  if (phase.includes('Phase 1')) return 'phase-one'
  if (phase.includes('Phase 2')) return 'phase-two'
  return 'phase-neutral'
}

const slideLinks = [
  { label: 'Journey', id: 'journey' },
  { label: 'Learnings', id: 'learnings' },
  { label: 'Projects', id: 'accomplishments' },
  { label: 'Growth', id: 'personalgrowth' },
  { label: 'April', id: 'april' },
  { label: 'Plans', id: 'plans' },
]
</script>

<template>
  <main class="deck">
    <aside class="rail" aria-label="Slide navigation">
      <a v-for="link in slideLinks" :key="link.id" :href="`#${link.id}`">
        {{ link.label }}
      </a>
    </aside>

    <section id="journey" class="slide hero">
      <div class="hero-shell">
        <div>
          <p class="eyebrow">Slide 01</p>
          <h1>PRAXXYS JOURNEY</h1>
          <p class="lead">
            My progressive journey at Praxxys from January to April, highlighting key learnings, accomplishments,
            and plans for growth.
          </p>
          <div class="hero-actions">
            <a href="#april" class="btn btn-solid">April Plan</a>
            <a href="#plans" class="btn btn-ghost">Improvement Plan</a>
            <button type="button" class="btn btn-ghost" :disabled="isExporting" @click="handleExport">
              {{ isExporting ? 'Preparing PDF...' : 'Export to PDF' }}
            </button>
          </div>
        </div>
        <aside class="hero-stats" aria-label="Journey summary">
          <article v-for="stat in journeyStats" :key="stat.label" class="stat-tile">
            <p>{{ stat.label }}</p>
            <strong>{{ stat.value }}</strong>
          </article>
        </aside>
      </div>
    </section>

    <section id="learnings" class="slide split">
      <article>
        <p class="eyebrow">Slide 02</p>
        <h2>Key Learnings</h2>
        <p>
          Stronger understanding of architecture, standards, and real-world project
          workflow improved delivery confidence and system-level thinking.
        </p>
        <ul class="feature-list">
          <li>Stronger backend architectural thinking and package-level awareness</li>
          <li>Improved API quality process through QA collaboration and fixes</li>
          <li>Better alignment with project lifecycle, expectations, and delivery pacing</li>
        </ul>
      </article>
      <div class="metrics" role="list" aria-label="Key learnings">
        <div v-for="item in keyLearnings" :key="item" role="listitem" class="metric-card">
          <strong>{{ item }}</strong>
        </div>
      </div>
    </section>

    <section id="accomplishments" class="slide panel">
      <p class="eyebrow">Slide 03</p>
      <h2>Projects Handled (Jan-Mar)</h2>
      <p class="section-note">
        Transitioned from early-stage adjustment to handling critical issues and driving
        end-to-end delivery.
      </p>
      <div class="principles" role="list">
        <article v-for="report in projectReports" :key="report.project" class="principle-card" role="listitem">
          <h3>{{ report.project }}</h3>
          <p class="eyebrow">Workload</p>
          <ul>
            <li v-for="item in report.workload" :key="item">{{ item }}</li>
          </ul>
          <p class="eyebrow">Bottlenecks</p>
          <ul>
            <li v-for="item in report.bottlenecks" :key="item">{{ item }}</li>
          </ul>
          <p class="eyebrow">Accomplishments</p>
          <ul>
            <li v-for="item in report.accomplishments" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section id="personalgrowth" class="slide panel">
      <p class="eyebrow">Slide 04</p>
      <h2>Personal Growth and Achievements</h2>
      <p class="section-note">
        Personal achievements separated from project delivery to highlight individual growth.
      </p>
      <div class="growth-layout" role="list" aria-label="Personal growth details">
        <article class="growth-main-card" role="listitem">
          <h3>Personal Achievements</h3>
          <ol class="growth-list">
            <li v-for="(item, index) in personalGrowth" :key="item">
              <span class="growth-index">{{ index + 1 }}</span>
              <span>{{ item }}</span>
            </li>
          </ol>
        </article>
        <aside class="growth-highlight" role="listitem">
          <p class="eyebrow">Growth Snapshot</p>
          <h3>Faster Delivery with Stronger Accountability</h3>
          <div class="growth-tags" aria-label="Growth themes">
            <span>Dev Speed</span>
            <span>Confidence</span>
            <span>Prioritization</span>
            <span>Accountability</span>
          </div>
        </aside>
      </div>
    </section>

    <section id="april" class="slide panel">
      <p class="eyebrow">Slide 05</p>
      <h2>Detailed April Schedule and Plans</h2>
      <div class="delay-warning" role="note" aria-live="polite">
        <span>Timeline update: </span><br />
        We are currently delayed by 1 week from the original March schedule, and the total E2E core features are estimated at 80+ hours.
      </div>
      <div class="phase-strip" role="list" aria-label="DOXO phases">
        <article class="phase-card" role="listitem">
          <p>Phase 1 • Apr 1-17</p>
          <h3>E2E function for client demo</h3>
        </article>
        <article class="phase-card phase-card-alt" role="listitem">
          <p>Phase 2 • Apr 20-24</p>
          <h3>QA fixings and refinements</h3>
        </article>
      </div>

      <div class="calendar-wrap">
        <h3>April Week-by-Week Calendar (2026)</h3>
        <table class="calendar-table" aria-label="April 2026 weekly calendar">
          <thead>
            <tr>
              <th>Week</th>
              <th>Dates</th>
              <th>Phase</th>
              <th>Primary Focus</th>
              <th>Planned Output</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in aprilCalendar" :key="row.week" :class="getPhaseClass(row.phase)">
              <td>{{ row.week }}</td>
              <td>{{ row.dates }}</td>
              <td>{{ row.phase }}</td>
              <td>{{ row.focus }}</td>
              <td>{{ row.output }}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>

    <section id="plans" class="slide outro">
      <p class="eyebrow">Slide 06</p>
      <h2>Plans and Areas for Improvement Q2</h2>
      <p class="section-note">
        April execution priorities focused on faster delivery, fewer QA issues, and
        stronger end-to-end ownership.
      </p>
      <div class="plans-grid" role="list">
        <article class="principle-card plan-card" role="listitem">
          <h3>Plans for April</h3>
          <ul>
            <li v-for="plan in aprilPlans" :key="plan">{{ plan }}</li>
          </ul>
        </article>
        <article class="principle-card plan-card" role="listitem">
          <h3>Areas for Improvement</h3>
          <ul>
            <li v-for="area in improvementAreas" :key="area">{{ area }}</li>
          </ul>
        </article>
      </div>
    </section>
  </main>
</template>
