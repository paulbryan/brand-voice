# BrandVoice AgentApp - Usage Examples

## Overview
BrandVoice helps you maintain consistent brand voice across all your content by:
1. **The Mirror** - Analyzing your existing content to extract your "Linguistic DNA"
2. **The Match** - Transforming new drafts to match your authentic voice

---

## Example 1: Phase 1 - Creating a LinkedIn Voice Profile

### User Input (Form):
```
Workflow Phase: mirror
Profile Name: LinkedIn Founder Voice
Content Sample 1: https://linkedin.com/posts/founder-post-1
Content Sample 2: [Pasted text of a successful LinkedIn post]
Content Sample 3: https://linkedin.com/posts/founder-post-2
Content Sample 4: [Optional]
Content Sample 5: [Optional]
```

### Agent Workflow:
1. **Extract Content**:
   - Sample 1 & 3: Use WebFetch to scrape URLs
   - Sample 2: Use pasted text directly

2. **Combine & Analyze**:
   - Merge all samples into one corpus
   - Run the Mirror prompt (Linguistic Anthropologist analysis)
   - Parse JSON response with personality traits, rhythm, tone, persona, and scores

3. **Generate Artifacts**:
   - Fill in the `brandvoice_scorecard_template.html` with:
     - Profile name
     - Trait badges (e.g., "Authentic", "Visionary", "Conversational")
     - Sentence rhythm (e.g., "Punchy with strategic pauses")
     - Vocabulary tone (e.g., "Professional but approachable")
     - Brand persona quote
     - Tone score bars (Professional: 75%, Conversational: 80%, etc.)
   - Create a JSON file with the complete analysis
   - Save the profile for future use

4. **Output**:
   - Beautiful visual scorecard HTML
   - JSON profile data file
   - Instructions to use this profile in Phase 2

---

## Example 2: Phase 2 - Transforming Content with Saved Profile

### User Input (Form):
```
Workflow Phase: match
Selected Voice Profile: LinkedIn Founder Voice
Draft to Transform: [Pasted draft of a new LinkedIn post in bland corporate speak]
```

### Agent Workflow:
1. **Load Profile**:
   - Retrieve the "LinkedIn Founder Voice" JSON data
   - Extract the complete DNA analysis

2. **Transform Content**:
   - Run the Match prompt (Brand Copywriter)
   - Inject the DNA data and user draft
   - Get back: transformed content + key changes list

3. **Generate Artifacts**:
   - Fill in `brandvoice_transformation_template.html` with:
     - Original content (left panel)
     - Transformed content (right panel)
     - Bulleted list of key changes
     - Mini-scorecard showing which profile was used
   - Create a clean text file with just the transformed content
   - Add copy-to-clipboard functionality

4. **Output**:
   - Side-by-side comparison HTML
   - Transformed text file
   - Change log for transparency

---

## Example 3: Multiple Voice Profiles

### Scenario:
A ghostwriter manages 3 different clients, each with unique voices:
- "Tech CEO - Twitter Voice"
- "Healthcare Founder - LinkedIn Voice"
- "SaaS Marketer - Newsletter Voice"

### Workflow:
1. Run Phase 1 (Mirror) three times with different samples for each client
2. Each profile is saved separately
3. When transforming content, select the appropriate profile from the dropdown
4. The agent loads the correct DNA and transforms accordingly

---

## Technical Implementation Notes

### Profile Storage
Profiles should be stored as:
```
/profiles/linkedin_founder_voice.json
/profiles/tech_ceo_twitter_voice.json
```

Each JSON contains:
```json
{
  "profile_name": "LinkedIn Founder Voice",
  "created_at": "2026-02-15T10:30:00Z",
  "personality_traits": ["authentic", "visionary", "conversational"],
  "sentence_rhythm": "Punchy with strategic pauses",
  "vocabulary_tone": "Professional but approachable",
  "brand_persona": "A thought leader who demystifies complex ideas...",
  "tone_scores": {
    "professional": 75,
    "conversational": 80,
    "witty": 60,
    "authoritative": 70,
    "empathetic": 85
  },
  "sample_texts": ["...", "...", "..."]
}
```

### WebFetch Integration
When a user provides a URL:
```javascript
// Detect if input is a URL
if (sample.startsWith('http://') || sample.startsWith('https://')) {
  const extractedText = await WebFetch(sample,
    "Extract the main text content from this page, removing navigation, ads, and boilerplate."
  );
  samples.push(extractedText);
} else {
  samples.push(sample); // Direct text
}
```

### HTML Template Population
Replace placeholders in templates:
- `{{PROFILE_NAME}}` → Actual profile name
- `{{TRAIT_BADGES}}` → Generate HTML: `<div class="trait-badge">authentic</div>` for each trait
- `{{TONE_SCORE_BARS}}` → Generate score bar HTML with proper widths
- `{{TIMESTAMP}}` → Current date/time

---

## Error Handling

### URL Fetch Failures
If WebFetch fails:
```
"⚠️ Unable to fetch content from [URL]. Please copy and paste the text directly,
or check if the URL is accessible."
```

### Missing Profile in Phase 2
If selected profile doesn't exist:
```
"❌ Profile '[NAME]' not found. Please run Phase 1 first to create this profile,
or choose from existing profiles: [LIST]"
```

### Insufficient Samples in Phase 1
If user provides < 3 samples:
```
"⚠️ For accurate voice analysis, please provide at least 3 content samples.
You've provided [N]. Add [3-N] more samples."
```

---

## Demo Script for LovHack Mini

### The Pitch (30 seconds)
"BrandVoice solves brand inconsistency. Watch this: I paste 3 of my best LinkedIn posts,
and BrandVoice analyzes my 'Linguistic DNA'—my tone, rhythm, personality traits.
Now when I write a bland draft, BrandVoice transforms it to sound exactly like me.
Perfect for ghostwriters, founders, and marketing teams who need to scale content
without losing authenticity."

### The Demo (2 minutes)
1. **Show Phase 1**:
   - Enter 3 sample URLs
   - Click analyze
   - **Wow moment**: Beautiful scorecard appears with personality traits and tone scores

2. **Show Phase 2**:
   - Paste a boring, generic draft
   - Select the saved profile
   - Click transform
   - **Wow moment**: Side-by-side shows the dramatic transformation + highlighted changes

3. **Show scalability**:
   - "I can create multiple profiles—LinkedIn voice, newsletter voice, Twitter voice—
     and switch between them instantly."

---

## Success Metrics

The agentapp is successful if:
1. ✅ Users can analyze voice from 3-5 samples (URLs + text)
2. ✅ Visual scorecard renders beautifully with all data
3. ✅ Profiles are saved and reusable
4. ✅ Transformations maintain facts while changing tone
5. ✅ Key changes are clearly highlighted
6. ✅ Users can create multiple voice profiles
7. ✅ The demo takes < 3 minutes and gets "wow" reactions

---

## Future Enhancements (Post-MVP)

- **Batch transformation**: Transform 10 drafts at once
- **Voice comparison**: Compare two voice profiles side-by-side
- **Browser extension**: Analyze and transform in real-time while writing
- **Team sharing**: Share voice profiles across a team
- **A/B testing**: Test which voice gets more engagement
- **Voice evolution tracking**: See how your voice changes over time

But for LovHack Mini, focus on the core Mirror + Match workflow.
Nail the basics, make it beautiful, and ship it. 🚀
