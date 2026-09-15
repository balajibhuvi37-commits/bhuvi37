/**
 * Interactive Simulators and Narrative Engines
 * Powers:
 * 1. Digital Collapse Simulator (developers.html)
 * 2. Hope vs. Concern Filter Tabs (it-future.html)
 * 3. Problem -> Solution Pipeline Step Engine (challenges-solutions.html)
 * 4. Human + AI Cyclical Architecture Stage Viewer (future.html)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. DIGITAL INFRASTRUCTURE COLLAPSE SIMULATOR (developers.html)
  // =========================================================================
  const simWrapper = document.getElementById('collapse-simulator');
  const presenceSlider = document.getElementById('presence-slider');
  const sliderValLabel = document.getElementById('slider-value-label');
  const presetBtns = document.querySelectorAll('.preset-btn');
  const uptimeVal = document.getElementById('uptime-val');
  const servicesVal = document.getElementById('services-val');
  const securityVal = document.getElementById('security-val');
  const cveVal = document.getElementById('cve-val');
  const consoleLogs = document.getElementById('console-log-feed');

  if (simWrapper && presenceSlider) {
    const logPresets = {
      healthy: [
        { type: 'ok', text: '[08:30:12 UTC] Cluster health check: 48/48 nodes reporting healthy.' },
        { type: 'ok', text: '[08:30:18 UTC] CI/CD pipeline build #4928 passed. Canary deploy active.' },
        { type: 'ok', text: '[08:30:24 UTC] Human SRE team rotated TLS certificates. Zero downtime.' },
        { type: 'ok', text: '[08:30:30 UTC] Automated tests passed with human architectural sign-off.' }
      ],
      degraded: [
        { type: 'warn', text: '[08:31:02 UTC] WARNING: Memory leak in payment gateway microservice.' },
        { type: 'warn', text: '[08:31:14 UTC] AI code suggestion introduced edge-case recursion. No dev to fix.' },
        { type: 'warn', text: '[08:31:25 UTC] API latency spike: 890ms. Database connection pool 88% full.' },
        { type: 'warn', text: '[08:31:40 UTC] Automated alerts firing. Backlog increasing without developers.' }
      ],
      blackout: [
        { type: 'critical', text: '[08:32:00 UTC] CRITICAL: DB connection pool exhausted! Gateway timed out.' },
        { type: 'critical', text: '[08:32:15 UTC] SECURITY ALERT: Unpatched Zero-Day exploited on Auth API.' },
        { type: 'critical', text: '[08:32:30 UTC] FATAL: AI autonomous model hallucinated bad migration. Data corrupted.' },
        { type: 'critical', text: '[08:32:45 UTC] SYSTEM BLACKOUT: Zero humans available to execute disaster recovery.' }
      ]
    };

    function updateSimulation(val) {
      sliderValLabel.textContent = `${val}% Developer Presence`;

      // Update preset buttons state
      presetBtns.forEach(btn => {
        const btnVal = parseInt(btn.getAttribute('data-val'), 10);
        btn.classList.toggle('active', btnVal === val && val > 30);
        btn.classList.toggle('blackout-active', btnVal === val && val <= 30);
      });

      if (val >= 75) {
        simWrapper.classList.remove('blackout-mode');
        uptimeVal.textContent = '99.99%';
        uptimeVal.style.color = 'var(--accent-emerald)';
        servicesVal.textContent = '48 / 48';
        securityVal.textContent = 'OPTIMAL';
        securityVal.style.color = 'var(--accent-emerald)';
        cveVal.textContent = '0 Open';
        cveVal.style.color = 'var(--text-secondary)';
        renderLogs(logPresets.healthy);
      } else if (val >= 35) {
        simWrapper.classList.remove('blackout-mode');
        uptimeVal.textContent = '86.4%';
        uptimeVal.style.color = 'var(--accent-gold)';
        servicesVal.textContent = '31 / 48';
        securityVal.textContent = 'DEGRADED';
        securityVal.style.color = 'var(--accent-gold)';
        cveVal.textContent = '38 Unfixed';
        cveVal.style.color = 'var(--accent-gold)';
        renderLogs(logPresets.degraded);
      } else {
        simWrapper.classList.add('blackout-mode');
        uptimeVal.textContent = val === 0 ? '0.00%' : '14.2%';
        uptimeVal.style.color = 'var(--accent-rose)';
        servicesVal.textContent = val === 0 ? '0 / 48' : '4 / 48';
        securityVal.textContent = 'BREACHED';
        securityVal.style.color = 'var(--accent-rose)';
        cveVal.textContent = '2,400+';
        cveVal.style.color = 'var(--accent-rose)';
        renderLogs(logPresets.blackout);
      }
    }

    function renderLogs(logs) {
      if (!consoleLogs) return;
      consoleLogs.innerHTML = logs
        .map(l => `<div class="log-line ${l.type}">${escapeHtml(l.text)}</div>`)
        .join('');
    }

    presenceSlider.addEventListener('input', (e) => {
      updateSimulation(parseInt(e.target.value, 10));
    });

    presetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const val = parseInt(btn.getAttribute('data-val'), 10);
        presenceSlider.value = val;
        updateSimulation(val);
      });
    });

    // Initialize
    updateSimulation(100);
  }

  // =========================================================================
  // 2. HOPE VS CONCERN SPLIT-SCREEN TABS (it-future.html)
  // =========================================================================
  const filterTabs = document.querySelectorAll('.hope-concern-tabs .tab-btn');
  const hopeCol = document.querySelector('.matrix-column.hope');
  const concernCol = document.querySelector('.matrix-column.concern');

  if (filterTabs.length && hopeCol && concernCol) {
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.getAttribute('data-filter');
        if (filter === 'all') {
          hopeCol.style.display = 'block';
          concernCol.style.display = 'block';
          hopeCol.parentElement.style.gridTemplateColumns = window.innerWidth > 992 ? '1fr 1fr' : '1fr';
        } else if (filter === 'hope') {
          hopeCol.style.display = 'block';
          concernCol.style.display = 'none';
          hopeCol.parentElement.style.gridTemplateColumns = '1fr';
        } else if (filter === 'concern') {
          hopeCol.style.display = 'none';
          concernCol.style.display = 'block';
          concernCol.parentElement.style.gridTemplateColumns = '1fr';
        }
      });
    });
  }

  // =========================================================================
  // 3. PROBLEM -> SOLUTION PIPELINE STEP ENGINE (challenges-solutions.html)
  // =========================================================================
  const stepNodes = document.querySelectorAll('.step-node');
  const stepPreviewTitle = document.getElementById('pipeline-step-title');
  const stepPreviewDesc = document.getElementById('pipeline-step-desc');

  const pipelineData = [
    {
      title: 'Phase 1: Real-World Problem Identification',
      desc: 'Humans identify domain-specific business, social, or technical friction. AI cannot invent real user empathy or commercial context without human stakeholders framing the objective.'
    },
    {
      title: 'Phase 2: Human Architectural Design & System Modeling',
      desc: 'Senior software architects design microservices, security perimeters, database schemas, and edge resilience. This requires nuanced tradeoff analysis that probabilistic models cannot guarantee.'
    },
    {
      title: 'Phase 3: AI-Assisted Accelerated Code Synthesis',
      desc: 'Generative AI and automated tooling create boilerplate syntax, scaffolding, repetitive unit tests, and API connectors in seconds, multiplying engineer productivity 3x–5x.'
    },
    {
      title: 'Phase 4: Human Testing, Validation & Security Audits',
      desc: 'Developers rigorously vet AI-generated code for silent hallucinations, memory leaks, OWASP top 10 vulnerabilities, compliance standards (GDPR/HIPAA), and business logic flaws.'
    },
    {
      title: 'Phase 5: Resilient Production Deployment & Observability',
      desc: 'The software is deployed to distributed cloud infrastructure with human-monitored telemetry, continuous feedback, disaster recovery protocols, and iterative refinement.'
    }
  ];

  if (stepNodes.length && stepPreviewTitle && stepPreviewDesc) {
    stepNodes.forEach((node, idx) => {
      node.addEventListener('click', () => {
        stepNodes.forEach(n => n.classList.remove('active'));
        node.classList.add('active');
        if (pipelineData[idx]) {
          stepPreviewTitle.textContent = pipelineData[idx].title;
          stepPreviewDesc.textContent = pipelineData[idx].desc;
        }
      });
    });
  }

  // =========================================================================
  // 4. HUMAN + AI WORKFLOW ENGINE (future.html)
  // =========================================================================
  const stagePills = document.querySelectorAll('.workflow-stage-pill');
  const stageHeading = document.getElementById('stage-detail-heading');
  const stageDesc = document.getElementById('stage-detail-desc');
  const stageRole = document.getElementById('stage-detail-role');
  const stageAiLeverage = document.getElementById('stage-detail-leverage');

  const stageData = [
    {
      heading: '1. Human Idea & Context Formulation',
      desc: 'Defining what needs to be solved, understanding human psychology, customer pain points, market differentiation, and commercial viability.',
      role: 'Product Strategists, Human Developers, Domain Experts',
      leverage: '15% AI Exploration / 85% Human Intuition'
    },
    {
      heading: '2. Developer System Architecture',
      desc: 'Translating requirements into resilient system diagrams, choosing protocols (gRPC, GraphQL, REST), data partitions, and zero-trust security foundations.',
      role: 'Software Engineers, Cloud Architects, Security Leads',
      leverage: '25% AI Diagramming / 75% Human Systems Engineering'
    },
    {
      heading: '3. AI-Assisted Code Synthesis',
      desc: 'Generating boilerplate, CRUD operations, database queries, documentation scaffolding, and translation between legacy languages.',
      role: 'Human-Guided AI Agents, LLMs, Neural Copilots',
      leverage: '80% AI Generation / 20% Human Prompt Guidance'
    },
    {
      heading: '4. Rigorous Human Validation & Security',
      desc: 'Deep code reviews, fuzzing, penetration testing, compliance verification, and ensuring no prompt injection or logic vulnerabilities leak into release.',
      role: 'Cybersecurity Engineers, QA Architects, Senior Developers',
      leverage: '30% AI Static Analysis / 70% Human Critical Judgement'
    },
    {
      heading: '5. Production Deployment & Cloud Orchestration',
      desc: 'Canary deployments, Kubernetes cluster scaling, multi-region failover, latency optimization, and real-time transaction monitoring.',
      role: 'DevOps/SRE Engineers, Cloud Platform Teams',
      leverage: '60% Automated CI/CD / 40% Human Observability Oversight'
    },
    {
      heading: '6. Continuous Feedback & Iterative Evolution',
      desc: 'Monitoring user telemetry, bug triage, feature roadmap evolution, adapting to changing business models, and keeping software alive.',
      role: 'Full Lifecycle Engineering Team & Stakeholders',
      leverage: '50% AI Behavioral Analytics / 50% Human Strategic Vision'
    }
  ];

  if (stagePills.length && stageHeading && stageDesc && stageRole && stageAiLeverage) {
    stagePills.forEach((pill, idx) => {
      pill.addEventListener('click', () => {
        stagePills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        if (stageData[idx]) {
          stageHeading.textContent = stageData[idx].heading;
          stageDesc.textContent = stageData[idx].desc;
          stageRole.textContent = stageData[idx].role;
          stageAiLeverage.textContent = stageData[idx].leverage;
        }
      });
    });
  }

  // Utility
  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
});
