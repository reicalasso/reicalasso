<div align="center">
  <img src="assets/github-header-banner.png" width="100%" alt="Kael Valen Banner" />

  <br/>

  <h1>Mehmet Arda Hakbilen <strong>(Kael Valen)</strong></h1>
  <p><em>Software Engineer · ML Systems & Efficient Architectures · Student</em></p>

  <br/>

  <p>
    <img src="https://img.shields.io/badge/Focus-Efficient%20ML%20Systems-e53e3e?style=for-the-badge&logo=pytorch&logoColor=white" />
    <img src="https://img.shields.io/badge/Research-Alternative%20Architectures-c53030?style=for-the-badge&logo=openai&logoColor=white" />
    <img src="https://komarev.com/ghpvc/?username=kaelvalen&label=Profile%20views&color=e53e3e&style=for-the-badge" />
  </p>

  <br/>

  <p>
    <a href="mailto:mehmetardahakbilen2005@gmail.com">
      <img src="https://img.shields.io/badge/Email-Contact-e53e3e?style=for-the-badge&logo=gmail&logoColor=white" />
    </a>
    <a href="https://www.linkedin.com/in/mehmet-arda-hakbilen-12aba6269/">
      <img src="https://img.shields.io/badge/LinkedIn-Connect-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white" />
    </a>
  </p>
</div>

---

## What I'm Working On

I'm interested in the intersection of **model architecture** and **inference efficiency** — why modern sequence models are designed the way they are, where they fail, and whether simpler alternatives can close the gap.

Right now my main project is [**PRISM**](https://github.com/kaelvalen/prism) — a modality-agnostic sequence architecture that processes ECG signals and image patches through one shared backbone built from interleaved S4D-Complex and Gated Delta Rule blocks. The hybrid run hits **88.4% on CIFAR-10** with ~8M params; ablations and PTB-XL ECG benchmarks are running.

**Current focus areas:**
- State-space models (S4D, complex diagonal SSMs) and associative memory (delta rule, fast weights)
- Hybrid sequence architectures — when interleaving beats either component alone
- Hardware-aware algorithm design (parallel scan, chunked recurrence, memory hierarchy)
- Modality-agnostic backbones — testing how far a single design generalizes across signal types

---

## Projects

### [PRISM — Parallel Recurrent Integrated Signal Model](https://github.com/kaelvalen/prism)
`PyTorch` `SSM` `Delta Rule` `Research` · **Active**

A modality-agnostic sequence model: 12-layer hybrid backbone interleaving S4D-Complex blocks (continuous-time signal dynamics) with Gated Delta Rule blocks (matrix-valued associative memory) at a 3:1 ratio. Same backbone handles 12-lead ECG, image patches, and arbitrary continuous signals — only the input projection and output head are per-modality. CIFAR-10: 88.4% val acc on the hybrid config.

### [PULSE — Parallel Unified Linear State Engine](https://github.com/kaelvalen/beyond_transformer)
`PyTorch` `Python` `Research` · **Experimental**

Earlier exploration of a single O(n) primitive (local convolution + linear attention + gated fusion + key-value memory) as a transformer alternative. Predates PRISM. Useful as a study repo; see the README for current status and known limitations.

---

## Tech Stack

<table>
  <tr>
    <td><strong>ML / Research</strong></td>
    <td>
      <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white" />
      <img src="https://img.shields.io/badge/CUDA-76B900?style=flat-square&logo=nvidia&logoColor=white" />
      <img src="https://img.shields.io/badge/Triton-9B59B6?style=flat-square&logo=openai&logoColor=white" />
      <img src="https://img.shields.io/badge/HuggingFace-FFD21E?style=flat-square&logo=huggingface&logoColor=black" />
    </td>
  </tr>
  <tr>
    <td><strong>Languages</strong></td>
    <td>
      <img src="https://img.shields.io/badge/Rust-000000?style=flat-square&logo=rust&logoColor=white" />
      <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" />
      <img src="https://img.shields.io/badge/C++-00599C?style=flat-square&logo=cplusplus&logoColor=white" />
      <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
    </td>
  </tr>
  <tr>
    <td><strong>Web</strong></td>
    <td>
      <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" />
      <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white" />
      <img src="https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
    </td>
  </tr>
  <tr>
    <td><strong>Infra</strong></td>
    <td>
      <img src="https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black" />
      <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" />
      <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white" />
    </td>
  </tr>
</table>

---

## GitHub Activity

<div align="center">
  <img src="https://github.com/kaelvalen/kaelvalen/blob/metrics/github-metrics.svg" width="85%" alt="GitHub Metrics" />
  <br/><br/>
  <img src="https://github.com/kaelvalen/kaelvalen/blob/output/github-contribution-grid-snake.svg" width="100%" alt="Contribution Snake" />
</div>

---

<div align="center">
  <sub>Open to research collaboration, architecture discussions, and code review. Not interested in wrapper apps or hype-driven projects.</sub>
</div>
