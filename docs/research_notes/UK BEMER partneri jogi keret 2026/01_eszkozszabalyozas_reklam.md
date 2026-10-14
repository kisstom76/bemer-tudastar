# UK regulatory status and advertising rules for BEMER (PEMF medical device) sold by Hungarian partners in London. Fact-check of a Feb 2026 Gemini report, as of 13 Oct 2026

Legend: verdict = correct / partly correct / wrong / outdated / unverifiable. Items marked **[CHANGED SINCE FEB 2026]** flag developments after the Gemini report.

## Claim 1: MHRA supervises; legal basis is UK MDR 2002 (SI 2002/618) as amended post-Brexit

### Takeaway
**Correct.** In Great Britain the MHRA regulates medical devices under the UK Medical Devices Regulations 2002 (SI 2002/618), as amended. Two caveats: since 16 June 2025 the instrument includes a new Part 4A on post-market surveillance, and Northern Ireland follows the EU MDR instead.

### Cited Findings
- The MHRA's guidance "Regulating medical devices in the UK" (last updated 20 Feb 2026) sets out the GB regime under UK MDR 2002, with a separate Northern Ireland regime under the EU MDR (applied in NI since 26 May 2021) and the EU IVDR (since 26 May 2022) — [GOV.UK, updated 20 Feb 2026](https://www.gov.uk/guidance/regulating-medical-devices-in-the-uk)
- The current text of SI 2002/618 is on legislation.gov.uk. Regulation 12 (GB version) is quoted under Claim 6 — [legislation.gov.uk](https://www.legislation.gov.uk/uksi/2002/618/regulation/12)
- The Medical Devices (Post-market Surveillance Requirements) (Amendment) (Great Britain) Regulations 2024 (SI 2024/1368) inserted Part 4A into UK MDR 2002. It applies from 16 June 2025 to devices placed on the GB market from that date, whether CE- or UKCA-marked — [MHRA PMS guidance, GOV.UK](https://www.gov.uk/government/publications/medical-devices-post-market-surveillance-requirements/introduction-and-scope); [Hill Dickinson](https://www.hilldickinson.com/insights/articles/what-next-medical-devices-new-post-market-surveillance-obligations-and-beyond)

### Inferences
- The claim is correct as written. It is incomplete because it omits the June 2025 PMS amendment and the NI/EU MDR split.

### Gaps
- None material.

## Claim 2: BEMER-type PEMF devices are typically Class IIa under both EU MDR and UK MDR 2002. Also: BEMER's actual class/certificate, MHRA (PARD) registration, and UK Responsible Person

### Takeaway
**Partly correct, and unverifiable for BEMER itself.** Active therapeutic devices that administer energy fall under classification Rule 9 (EU MDR Annex VIII; UK MDR 2002 applies the MDD Annex IX rules). They are Class IIa unless the energy delivery is potentially hazardous, in which case they are Class IIb. Only UK reseller websites say BEMER is Class IIa. I found no primary BEMER document (notified body certificate or Declaration of Conformity), no PARD entry and no named UKRP.

### Cited Findings
- UK BEMER resellers and distributors describe BEMER as a "Class IIa Medical Device under the European Medical Device Regulation (MDR)". These are marketing claims, not regulatory records — [elevateyou.uk "BEMER UK"](https://elevateyou.uk/bemer-uk/); [elevateyou.uk guide](https://elevateyou.uk/bemer-therapy-uk/)
- Class IIa devices need a notified body conformity assessment. The notified body's four-digit number follows the CE mark on the label, so it can be read off the device or its IFU — [i3CGlobal on Class IIa](https://www.i3cglobal.com/class-iia-medical-device/)
- BEMER's UK website (bemergroup.com/en-gb) returned HTTP 404 on 13 Oct 2026, so no compliance statement could be read there — fetch attempt, 13 Oct 2026 (no URL to cite)
- Non-UK manufacturers must register every device with the MHRA through their UKRP before placing it on the GB market. "Unregistered devices cannot lawfully be placed on the GB market" — [GOV.UK, 20 Feb 2026](https://www.gov.uk/guidance/regulating-medical-devices-in-the-uk)

### Inferences
- The "typically Class IIa" claim matches Rule 9 logic for a low-energy PEMF device. Because BEMER Int. AG is in Liechtenstein, an EEA/EU MDR jurisdiction, its CE certificate would come from an EU notified body.
- Because BEMER is sold openly in the UK through its partner network, a UKRP and an MHRA registration very likely exist. This is an inference only, not verified.

### Gaps
- **Unverifiable:** the BEMER notified body and certificate number, the Declaration of Conformity, the PARD entry, and the UKRP's name. PARD (the MHRA Public Access Registration Database) is a JavaScript application that I could not query. **Action for the report:** search "BEMER" at https://pard.mhra.gov.uk manually, read the UKRP name and address from the device label or IFU, and request the DoC and certificate from BEMER UK or the partner back-office.
- I could not confirm whether the EUDAMED entry is public.

## Claim 3: CE-marked EU MDR devices can be placed on the GB market until 30 June 2030; UKCA mandatory only after. Latest MHRA position

### Takeaway
**Correct for now, with an important caveat.** The 30 June 2030 date for EU MDR CE-marked devices still stands. **[CHANGED SINCE FEB 2026]** The MHRA ran a consultation from 16 Feb to 10 Apr 2026 on recognising EU MDR/IVDR CE marking **indefinitely**. Secondary sources now report that indefinite recognition will **not** be included in the pre-market legislation expected later in 2026. I found no official MHRA response. The wording "UKCA mandatory only after" also needs qualifying: the coming pre-market SI adds international reliance routes, so UKCA would not necessarily be the only route after 2030.

### Cited Findings
- **Current official transitional dates:** EU MDR (and IVDR) CE-marked devices may be placed on the GB market until 30 June 2030. MDD/AIMDD devices may be placed until the earlier of certificate expiry or 30 June 2028 — [GOV.UK, 20 Feb 2026](https://www.gov.uk/guidance/regulating-medical-devices-in-the-uk)
- **July 2025:** the government's response to the routes-to-market consultation said the MHRA would consult on indefinite recognition of CE-marked devices instead of moving straight to reliance routes for them — [Covington, Inside EU Life Sciences, 30 Jul 2025](https://www.insideeulifesciences.com/2025/07/30/mhra-announces-consultation-response-on-reforms-to-gb-pre-market-medical-device-regulation/)
- **Feb–Apr 2026 consultation:** it ran from 16 Feb to 10 Apr 2026 and asked three yes/no questions:
  - indefinite recognition of EU MDR/IVDR CE marking;
  - extending the MDD transition from 30 June 2028 to 31 Dec 2028;
  - whether recognition should be limited to devices whose UK classification is the same or lower.
  Sources: [Jones Day, Mar 2026](https://www.jonesday.com/en/insights/2026/03/the-uks-mhra-opens-public-consultation-on-indefinite-ce-mark-recognition-of-medical-devices-and-ivds); [Mills & Reeve, Mar 2026](https://www.mills-reeve.com/blogs/life-sciences/march-2026/mhra-consultation-permanent-recognition-of-ce-marked-devices/); [MedTech Europe, 7 Apr 2026](https://www.medtecheurope.org/2026/04/07/ce-marking-in-the-uk-mhra-consults-on-indefinite-recognition-of-eu-certified-devices/)
- **Reported outcome (secondary, unconfirmed):** industry sources say indefinite CE recognition will not be part of the 2026 pre-market legislation. The 2028/2030 dates remain the planning dates. The MDD extension to 31 Dec 2028 is still "live" — [Labelservice (undated, approx. Oct 2026)](https://labelservice.co.uk/what-the-mhras-ce-recognition-decision-means-for-uk-medical-device-packaging/); [Astra-Vue](https://astra-vue.com/ce-marking-ukca-and-the-mhra-recognition-consultation-what-it-means-for-your-market-access/). Citeline reports that the MHRA gave an update at RAPS 2026, but the substance was paywalled — [Citeline](https://insights.citeline.com/hbw-insight/health/policy-and-regulation/mhra-outlines-plans-for-medical-device-ce-mark-recognition-6VHJMLBVIBBVDEI34F4QNKVIZU/)
- **Pre-market SI:** on 8 May 2026 the MHRA notified the WTO of the draft Medical Devices (Amendment) Regulations 2026. The draft covers international reliance routes (Australia, Canada, US) plus SaMD, IVD and custom-made changes. It is expected to be made around **December 2026**, with provisions in force about six months later (around June 2027). It is **not yet in force** — [Hogan Lovells, May 2026](https://www.hoganlovells.com/en/publications/uk-medical-devices-reform-mhra-publishes); [Fieldfisher](https://www.fieldfisher.com/en/insights/new-pre-market-requirements-for-medical-devices-mhra-publishes-draft-legislation---what%E2%80%99s-changed); [Pharmavibes timeline, 11 May 2026](https://www.pharmavibes.co.uk/2026/05/11/timeline-of-proposed-changes-to-the-uk-regulatory-framework-for-medical-devices/)
- **PMS regulations in force 16 June 2025:** confirmed — [GOV.UK PMS guidance](https://www.gov.uk/government/publications/medical-devices-post-market-surveillance-requirements/introduction-and-scope)

### Inferences
- For a BEMER partner in October 2026 there is no practical change. A BEMER device with a valid EU MDR CE mark (and MHRA registration through its UKRP) can be sold in GB at least until 30 June 2030.
- The long-term position after 2030 remains open (UKCA, a reliance route, or a later recognition decision). The final report should say this is "under review", not settled.

### Gaps
- No official MHRA consultation response on indefinite recognition was found as of 13 Oct 2026. The "deferred" reporting rests on secondary sources that may share the same origin.
- It is not confirmed whether the SI has been laid before Parliament.
- It is unknown whether BEMER holds an MDR certificate or still a legacy MDD certificate, which would make 2028 the relevant date. **Important:** if BEMER is on an MDD certificate, the GB deadline is 30 June 2028 (or 31 Dec 2028 if the extension is adopted), not 2030. Verify on the certificate.

## Claim 4: Non-UK manufacturers must appoint a UKRP; independent partners acting as distributors (not importers) need not register with the MHRA; importers have obligations

### Takeaway
**Correct.** The UKRP duty sits with BEMER Int. AG. Distributors do not appoint a UKRP and do not register devices. The importer (the first party to place the product on the GB market from outside the UK) must notify the manufacturer or UKRP, whose details then go to the MHRA. A partner who personally brings devices from Hungary or the EU into the UK to sell could be the importer. That point is missing from the original report.

### Cited Findings
- Non-UK manufacturers must appoint a single UKRP. The UKRP registers the devices, holds the technical documentation and DoC for the MHRA, cooperates on corrective action, and forwards complaints and incident reports to the manufacturer — [GOV.UK, 20 Feb 2026](https://www.gov.uk/guidance/regulating-medical-devices-in-the-uk)
- Importers and distributors need not appoint a UKRP. A GB importer that is not the UKRP must inform the manufacturer or UKRP before importing, and the manufacturer or UKRP must then give the importer's details to the MHRA — [GOV.UK, 20 Feb 2026](https://www.gov.uk/guidance/regulating-medical-devices-in-the-uk)
- Appointing a UKRP does not transfer the manufacturer's responsibility for compliance — [Cognidox](https://www.cognidox.com/blog/what-is-uk-responsible-person-mhra)

### Inferences
- If partners buy through BEMER's UK channel (goods already placed on the GB market), they are distributors. If they personally ship or carry devices from the EU into GB for resale, they may be importers and would need to tell BEMER's UKRP. The Hungarian report should flag this.

### Gaps
- BEMER's actual UK supply chain is unconfirmed: which entity imports into GB, and whether partners order from a UK warehouse or an EU one.

## Claim 5: Distributors must check marking and the English IFU

### Takeaway
**Correct, but incomplete.** Distributors and importers must verify the CE or UKCA marking and the labelling, and must meet storage and transport conditions. Labels and IFU must be in English for GB. The original omits the distributors' practical incident and complaint duties: pass them on to the manufacturer or UKRP, and do not supply non-compliant devices.

### Cited Findings
- Importers and distributors must comply with storage, transport and label-checking obligations for CE or UKCA marks. Their name need not appear on the label unless they act as UKRP — [GOV.UK, 20 Feb 2026](https://www.gov.uk/guidance/regulating-medical-devices-in-the-uk)
- The PMS regulations (Part 4A, from 16 June 2025) place reporting duties on manufacturers and UKRPs. Serious incidents now have shorter reporting deadlines, and FSCA duties are clearer — [GOV.UK PMS guidance](https://www.gov.uk/government/publications/medical-devices-post-market-surveillance-requirements/introduction-and-scope); [Hill Dickinson](https://www.hilldickinson.com/insights/articles/what-next-medical-devices-new-post-market-surveillance-obligations-and-beyond)

### Inferences
- In practice, a partner who learns of an adverse event or complaint should pass it to BEMER (or its UKRP) without delay, so the manufacturer can meet the shortened PMS deadlines. Anyone, including users and partners, can also report through the MHRA Yellow Card scheme. That is general knowledge and not re-verified in this session.

### Gaps
- I did not retrieve the exact statutory text of the GB distributor duties (UK MDR 2002 as amended). The English-language requirement is stated here from general knowledge, not re-fetched; verify it on GOV.UK if the report quotes it.

## Claim 6: UK MDR 2002 Regulation 12 explicitly allows showing devices at trade fairs and exhibitions

### Takeaway
**Correct, but conditional and easy to misapply.** Regulation 12(1) says that showing a device at a trade fair, exhibition, demonstration or similar gathering is not "placing on the market" **only if a visible sign clearly states that the device cannot be marketed or put into service until it complies**. The exemption is meant for **non-compliant** devices. A CE-marked, registered BEMER does not need it. It is **not** permission to sell non-compliant stock or to make claims.

### Cited Findings
- Reg 12 is titled "Exemptions from regulations 8 and 10". Para (1) covers a device shown at a trade fair, exhibition, demonstration or similar gathering and requires the visible sign — [legislation.gov.uk, SI 2002/618 reg 12](https://www.legislation.gov.uk/uksi/2002/618/regulation/12)

### Inferences
- The Gemini report probably misread this as general "permission to demonstrate". For a compliant, CE-marked BEMER, demonstrations at events are normal marketing. The advertising rules (Claim 7) still apply to everything said there.

### Gaps
- None.

## Claim 7: ASA/CAP Code section 12; partners' social media; ASA rulings on PEMF and light therapy; new guidance; DMCCA 2024

### Takeaway
**Mostly correct.** Under CAP Code section 12, medical claims for devices need the applicable conformity marking **and** robust evidence (rule 12.1). Claims about conditions needing medical supervision, and discouraging essential treatment, are restricted (rule 12.2). MLM sellers' posts are ads, and the seller is the responsible advertiser. **I found no ASA ruling naming BEMER or a PEMF mat in 2023–2026.** The nearest PEMF case is Cheshire Health (Sept 2021, upheld). Recent device rulings (LED masks, EMS, a UKCA device in 2025) set the standard. **[CHANGED SINCE FEB 2026]** The CAP medical devices guidance was updated on 29 Jan 2026 (just before the report). The ASA's MLM seller guidance pack was updated in April 2026. The CMA has used its DMCCA fining powers since early 2026.

### Cited Findings
- **CAP guidance "Health: Medical devices" (29 Jan 2026):**
  - Medical claims are acceptable only if the device holds the applicable conformity marking: CE or UKCA in GB, CE in NI.
  - Do not state or imply the device is "approved" or "certified" by the MHRA.
  - Certification shows safety and fitness for the intended purpose, but does not by itself substantiate advertising claims. Claims beyond the certified intended purpose need separate evidence (Actegy Ltd, 2021).
  - Rule 12.2 covers medical supervision.
  - Source: [ASA AdviceOnline, 29 Jan 2026](https://www.asa.org.uk/advice-online/health-medical-devices.html)
- **CAP guidance "Health: Magnetic field therapy" (12 Oct 2022):**
  - The ASA/CAP "have yet to see convincing evidence" that magnetic field therapy can diagnose or treat medical conditions. Claims need a robust body of clinical trial evidence.
  - Avoid referencing conditions that need medical supervision (12.2).
  - Encourage consumers to seek independent medical advice before significant treatments (12.3).
  - Source: [ASA AdviceOnline](https://www.asa.org.uk/advice-online/health-magnetic-field-therapy.html)
- CAP guidance "Magnetic devices and therapies": no convincing evidence for body-worn magnets. Medicinal claims may make the product a medical device — [ASA AdviceOnline](https://www.asa.org.uk/advice-online/health-magnetic-devices-and-therapies.html)
- **Closest PEMF ruling:** Cheshire Health, 15 Sept 2021 (upheld). A clinic's "Super Inductive System" (high-intensity PEMF) claimed "immediate and lasting pain relief". The clinical evidence submitted was not robust enough. This is reported via search summary; I did not read the full ruling — [ASA Health: Pain advice](https://www.asa.org.uk/advice-online/health-pain.html)
- **2025 device ruling (UKCA device, name not visible):**
  - UKCA marking alone is not evidence of efficacy.
  - Clinical evidence must predate the claims.
  - Customer surveys or app data alone are not enough.
  - Temporary effects must be stated.
  - The ruling was decided under the pre-7 April 2025 regime.
  - Source: [LexisNexis, 6 Aug 2025](https://www.lexisnexis.co.uk/legal/news/asa-ruling-clarifies-medical-device-advertising-evidence-requirements-under-new-dmcca)
- **Light-therapy analogue:** LED face mask ads (Beautaholics, Nov 2025) breached rule 12.1 through medicinal claims (acne, scars) for unlicensed products — [Global Cosmetics News](https://www.globalcosmeticsnews.com/asa-upholds-ruling-against-beautaholics-for-unauthorised-medicinal-claims-in-led-face-mask-ads/). On 10 Dec 2025 the ASA upheld complaints against nine advertisers for medicinal claims (supplements and tests) — [Marketing Beat, 10 Dec 2025](https://www.marketing-beat.co.uk/2025/12/10/asa-autism-adhd-rulings/). Commentary on the wellness and MHRA line: [CMS, Dec 2025](https://cms.law/en/gbr/legal-updates/wellness-brands-under-scrutiny-asa-draws-a-hard-line-on-mhra-regulated-claims)
- **Partners' social media = advertising:**
  - CAP's MLM advice says that sellers posting content within the Code's remit "will be considered the advertiser, and will be responsible for that content complying with the CAP Code".
  - Sellers must hold evidence for objective claims.
  - Recruitment posts with exaggerated earnings are a current ASA monitoring focus.
  - Sources: [ASA MLM advice](https://www.asa.org.uk/advice-online/multi-level-marketing.html); [Guidance Notice for MLM Companies](https://www.asa.org.uk/resource/guidance-notice-for-mlm-companies.html); [Guidance Pack for MLM Sellers (Recruitment)](https://www.asa.org.uk/resource/guidance-pack-for-mlm-sellers-recruitment.html)
- **[CHANGED SINCE FEB 2026]** An ASA document titled "Guidance Pack UPDATED APRIL 2026" (MLM seller guidance) exists. Its text could not be extracted (compressed PDF), so the substance of the changes is unknown — [ASA PDF](https://www.asa.org.uk/static/17b5dd81-5ce1-49de-b4c9f023c3230b09/Guidance-Pack-UPDATED-APRIL-2026.pdf)
- **DMCCA 2024 / CMA:**
  - The CMA has had direct consumer-law enforcement powers since 6 April 2025, with fines of up to 10% of global turnover. Unfair commercial practices (including misleading actions) now sit in the DMCCA.
  - First substantive fine: the AA, Final Infringement Notice of 15 Apr 2026, for drip pricing. Reported amounts are about £4.2m to about £5m.
  - Later fines (e.g. StubHub £889,200, July 2026).
  - First-year focus: drip pricing, fake reviews and choice architecture. No health-claim case was found.
  - Sources: [DLA Piper, 27 Apr 2026](https://www.dlapiper.com/insights/publications/2026/04/the-aa-agrees-a-fine-in-the-first-cma-consumer-protection-enforcement-under-the-dmcca); [Osborne Clarke](https://www.osborneclarke.com/insights/cma-issues-first-fines-under-its-new-uk-direct-consumer-enforcement-powers); [Mayer Brown, 3 Aug 2026](https://www.mayerbrown.com/en/insights/publications/2026/08/were-just-getting-started-the-cmas-new-consumer-enforcement-powers-in-action)

### Inferences
- In practice for partners: post no "treats, cures or heals [disease]" claims, make no claims beyond BEMER's certified intended purpose, and do not say "MHRA-approved". Testimonials implying disease treatment count as claims. Earnings claims in recruitment posts are a separate high-risk area.
- The DMCCA mainly makes the backstop sharper. The ASA refers persistent non-compliance to Trading Standards or the CMA, and the CMA can now fine directly. Realistically, small individual partners face ASA and Trading Standards action, not CMA fines.

### Gaps
- No ASA ruling on BEMER found (searches of news and the web index only; the ASA rulings database was not queried directly). **Action:** search "BEMER", "PEMF" and "pulsed" at asa.org.uk/codes-and-rulings/rulings.
- The full Cheshire Health 2021 ruling text and the 2025 UKCA-device ruling name were not retrieved.
- The content of the April 2026 MLM guidance-pack update is unknown.
- I did not re-fetch the exact current CAP Code rule numbers for "discouraging essential treatment" and testimonials. Rule 12.2 is cited per the ASA guidance pages.

## Claim 8: Medical advice by unqualified persons, GMC/HCPC context

### Takeaway
**Partly correct, and imprecise.** No general UK law bans a layperson from talking about health. The real limits are four:
- **protected titles:** using an HCPC-protected title (e.g. physiotherapist) or implying registration "with intent to deceive" is a criminal offence; GMC registration protects "registered medical practitioner";
- **ASA rule 12.2:** no claims to treat conditions needing medical supervision;
- **not discouraging essential treatment;**
- **consumer protection law.**
"Medical advice" as such is not a regulated activity for laypeople. Misrepresenting qualifications is.

### Cited Findings
- **HCPC (Health Professions Order 2001, art. 39(1)):** it is an offence, with intent to deceive, to claim registration, use a designated title or claim a qualification falsely. Describing a service as "physiotherapy" can be implied misuse. Owning a clinic is not an offence if registered professionals deliver the services. 2017 example: a £1,100 fine plus costs for a non-registered "chiropodist" — [HCPC misuse of title](https://www.hcpc-uk.org/concerns/what-we-investigate/misuse-of-title/); [HCPC 2017 prosecution](https://www.hcpc-uk.org/news-and-events/news/2017/hcpc-secures-successful-protection-of-title-prosecution/); [HCPC prosecution policy](https://www.hpc-uk.org/globalassets/resources/policy/prosecution-policy-protection-of-title.pdf)
- ASA rule 12.2 and the medical-supervision principle — [ASA Medical devices advice](https://www.asa.org.uk/advice-online/health-medical-devices.html)

### Inferences
- Hungarian partners who are qualified healthcare workers in Hungary but not registered with the HCPC or GMC must not use UK protected titles or imply UK registration. This matters for "doctor", "physio" or "therapist" self-descriptions on social media.

### Gaps
- I did not fetch the GMC/Medical Act 1983 text on "registered medical practitioner" or the use of "doctor". It is stated from general knowledge and needs verifying before quoting.

## Additional points missing from the original report

### Takeaway
The original report missed five points:
1. Northern Ireland follows the EU MDR (CE marking; UKNI only where a UK notified body is involved).
2. The 16 June 2025 PMS regime.
3. The risk that a partner who brings devices in becomes the "importer".
4. The MDD vs MDR certificate question, which decides whether the deadline is 2028 or 2030.
5. The Product Regulation and Metrology Act 2025 does **not** cover medical devices.

### Cited Findings
- **Northern Ireland:** the EU MDR has applied since 26 May 2021. CE marking is required, plus UKNI where a UK notified body is used. GB-based manufacturers need an EU or NI authorised representative. Certain NI registrations with the MHRA ran until 27 May 2026. Devices registered for NI can be placed on the GB market without further GB registration — [GOV.UK, 20 Feb 2026](https://www.gov.uk/guidance/regulating-medical-devices-in-the-uk)
- **The NI section of the MHRA guidance was updated on 20 Feb 2026. [CHANGED, around the report date]** — [GOV.UK](https://www.gov.uk/guidance/regulating-medical-devices-in-the-uk)
- Former authorised-representative accounts not updated to UKRP were to be closed after 30 Mar 2026 — [GOV.UK](https://www.gov.uk/guidance/regulating-medical-devices-in-the-uk)
- **Product Regulation and Metrology Act 2025:** Royal Assent 21 Jul 2025. It excludes medicines and medical devices (which stay under the Medicines and Medical Devices Act 2021), except weighing and measuring devices — [Fieldfisher](https://www.fieldfisher.com/en/insights/the-uk-s-new-product-regulation-and-metrology-act-2025-becomes-law-overview-and-next-steps); [Freshfields](https://riskandcompliance.freshfields.com/post/102kv26/the-uks-product-regulation-and-metrology-act-enters-into-force)
- ASA guidance: devices sold in NI must be CE-marked for medical claims to be acceptable — [ASA, 29 Jan 2026](https://www.asa.org.uk/advice-online/health-medical-devices.html)

### Inferences
- For London-based partners (GB), the GB rules apply. If they sell to NI customers, the EU MDR/CE regime applies there, which a CE-marked BEMER already meets.
- Any statement that the PRaM Act 2025 changes BEMER's status would be wrong.

### Gaps
- Whether BEMER UK has an NI distribution channel is unknown.
- The official MHRA outcome on indefinite CE recognition and the final text of the 2026 pre-market SI should be re-checked before the Hungarian report is finalised. A status change is possible in December 2026.
