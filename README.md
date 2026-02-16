# 🎯 BrandVoice

**AI-Powered Brand Voice Consistency Tool**

BrandVoice is a CREAO AgentApp that analyzes your unique "Linguistic DNA" from content samples and transforms new drafts to match your authentic brand voice. Perfect for creators, ghostwriters, and marketing teams who need consistent voice across all platforms.

---

## 🚀 Live Demo

- **Website**: [View Live Website](https://creao-build-studio-production.s3-us-west-2.amazonaws.com/agentapp-static/98b1e3a0-6071-704c-8850-7bef386da7e3/fxScf9bOoN/index.html)
- **AgentApp ID**: `TMXhceRjWM`
- **Platform**: Built on CREAO AgentApp Framework

---

## ✨ Features

### Phase 1: The Mirror (Voice Analysis)
- Analyze 3-5 content samples (URLs or text)
- Extract personality traits, sentence rhythm, and vocabulary tone
- Generate beautiful visual scorecards
- Save multiple voice profiles for different use cases

### Phase 2: The Match (Content Transformation)
- Load saved voice profiles
- Transform any draft to match your brand voice
- Side-by-side before/after comparison
- One-click copy transformed content

---

## 📁 Project Structure

```
brandvoice/
├── website/                          # Marketing website
│   ├── index.html                    # Landing page
│   ├── styles.css                    # Styling
│   ├── script.js                     # Interactive features
│   └── README.md                     # Website documentation
│
├── docs/                             # Documentation
│   ├── brandvoice_quickstart.md      # Quick start guide
│   └── brandvoice_example_usage.md   # Usage examples (in templates)
│
├── templates/                        # AgentApp artifact templates
│   ├── brandvoice_scorecard_template.html       # Voice analysis dashboard
│   └── brandvoice_transformation_template.html   # Transformation comparison
│
├── .gitignore                        # Git ignore rules
└── README.md                         # This file
```

---

## 🎯 How to Use

### Running the AgentApp

1. Access your CREAO workspace
2. Launch the AgentApp using ID: `TMXhceRjWM`
3. Choose your phase:
   - **Phase 1 (Mirror)**: Analyze your voice
   - **Phase 2 (Match)**: Transform content

### Creating a Voice Profile

1. Select "Phase 1: The Mirror"
2. Provide a profile name (e.g., "LinkedIn Founder Voice")
3. Add 3-5 content samples:
   - Paste URLs to your best posts
   - Or paste text directly
4. Run the agentapp
5. Get your visual scorecard and saved profile

### Transforming Content

1. Select "Phase 2: The Match"
2. Enter your saved profile name
3. Paste the draft you want to transform
4. Run the agentapp
5. Get transformed content matching your voice

---

## 🌐 Website Deployment

The marketing website is deployed to CREAO static hosting:
- Live URL in project files
- Fully responsive design
- Interactive AgentApp launcher
- Ready for custom domain

To deploy updates:
```bash
# Make changes to website/ files
# Then use CREAO's static hosting tool
# Or deploy to any web host (Netlify, Vercel, etc.)
```

---

## 🛠️ Tech Stack

- **Platform**: CREAO AgentApp Framework
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **AI Logic**: Custom prompts for linguistic analysis
- **Features**:
  - WebFetch for URL scraping
  - Dynamic HTML generation
  - JSON-based profile storage
  - Multi-profile management

---

## 🎬 Demo Script (LovHack Mini)

### The Pitch (30 seconds)
"BrandVoice solves brand inconsistency. Most creators sound different across LinkedIn, Twitter, and newsletters. We analyze your best content to extract your 'Linguistic DNA,' then transform any draft to match your authentic voice."

### The Demo (2 minutes)
1. **Show Phase 1**: Paste 3 posts → Get beautiful DNA scorecard
2. **Show Phase 2**: Paste bland draft → Watch transformation
3. **Show scalability**: Multiple profiles for different voices

### The Edge
"One tool manages all your voices. Perfect for ghostwriters, founders, and marketing teams."

---

## 📊 Use Cases

- **Solo Entrepreneurs**: Consistent voice across all platforms
- **Ghostwriters**: Manage multiple client voices effortlessly
- **Marketing Teams**: Ensure everyone writes in the founder's voice
- **Content Agencies**: Scale content without losing brand authenticity

---

## 🔧 Development

### AgentApp Components

**Logic Prompt**: Defines the two-phase workflow
- Mirror: Linguistic analysis with AI
- Match: Content transformation with brand DNA

**Form Schema**: Collects user inputs
- Profile name and content samples (Mirror)
- Profile selection and draft (Match)

**Artifact Templates**: Visual outputs
- Scorecard: Beautiful brand DNA dashboard
- Comparison: Before/after transformation view

**Capabilities**: Platform integrations
- WebFetch for URL content extraction

---

## 🎉 Achievements

- ✅ Fully functional two-phase workflow
- ✅ Beautiful visual artifacts
- ✅ Multi-profile support
- ✅ URL scraping capability
- ✅ Professional marketing website
- ✅ Demo-ready for LovHack Mini

---

## 📝 Next Steps

### Short-term
- [ ] Add profile listing/management UI
- [ ] Batch transformation (multiple drafts)
- [ ] Export profiles to JSON

### Long-term
- [ ] Browser extension for real-time transformation
- [ ] Team collaboration features
- [ ] Voice evolution tracking
- [ ] A/B testing for engagement

---

## 📄 License

This project was created for LovHack Mini 2026.

---

## 🙏 Credits

- Built with [CREAO Platform](https://creao.com)
- Powered by AI-driven linguistic analysis
- Designed for creators who value authentic voice

---

## 📧 Contact

For questions or feedback about BrandVoice:
- AgentApp Issues: Use AgentApp ID `TMXhceRjWM` in CREAO
- Website Issues: Check browser console or README in `website/`
- General Inquiries: [Your contact info]

---

**Built with ❤️ for authentic brand voices everywhere.**
