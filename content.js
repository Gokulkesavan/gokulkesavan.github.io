/* =====================================================================
   CONTENT  -  the ONLY file you need to edit for text changes.
   Commit it to GitHub and the site re-renders itself on the next load.

   Rules of thumb
   - Each list ( [ ... ] ) is one section. Copy an existing { ... } block,
     paste it next to the others, change the text. Don't forget the comma.
   - Delete a block to remove it. Empty a list ( [] ) to hide its section.
   - Write **double asterisks** around text to make it bold.
   - Write plain "&"  -  no need for &amp;.
   - Order on the page = order in the list (put newest experience first).
   ===================================================================== */
window.SITE = {

  /* ---- Browser tab title + search-engine description ---- */
  meta: {
    title: "Kesavagokul R  -  Lead Voice Core",
    description: "Kesavagokul R  -  VoIP/IMS engineer with 10+ years in network provisioning, fault management, SBC platforms and network integration. Chennai, India."
  },

  /* ---- Personal details (reused in header, hero, contact, footer) ---- */
  person: {
    name: "Kesavagokul R",
    photo: "IMG_2013.jpg",                       // remove this line to show initials instead
    location: "Chennai, India",                  // footer
    locationFull: "Chennai, Tamil Nadu, India",  // hero
    email: "bangarukesavan@gmail.com",
    phone: "+91 98941 89150",
    linkedin: "https://www.linkedin.com/in/kesavagokul-r-75803b95/",
    github: "https://github.com/gokulkesavan"
  },

  /* ---- Top of the page ---- */
  hero: {
    eyebrow: "Chennai, India · Open to Solution Architect roles",
    tagline: "Lead Voice Core  -  Fault Management, SBC Platforms & Network Integration",
    summary: "9+ years architecting resilient VoIP networks with expertise in protocol-level troubleshooting, multi-domain infrastructure (Networks, Linux, Cloud), and seamless service integration. Looking to transition into Solution Architect roles that combine SIP/IMS domain expertise with cloud-native infrastructure."
  },

  /* ---- Summary section: one string per paragraph ---- */
  summary: [
    "Highly experienced telecommunications professional with **9+ years in VoIP networks**. Extensive expertise in fault management across multiple operational layers. Multi-domain depth: protocol-level SIP/IMS troubleshooting, Linux system administration, cloud architecture, and enterprise network integration.",
    "Currently leading fault management operations at **Lyca Mobile** as Lead Engineer, driving infrastructure modernization through zero-downtime datacenter migrations, IMS integration projects, and network automation. Proven ability to design, deploy, and sustain carrier-grade systems at scale.",
    "Seeking to transition into **Solution Architect roles** where I can leverage deep telecom domain expertise to architect end-to-end solutions that bridge SIP/IMS core networks with cloud-native deployment models."
  ],

  /* ---- Skills: one card per group. 'note' is optional. ---- */
  skills: [
    { title: "Protocols",
      items: ["SIP", "RTP/RTCP", "SDP", "SS7", "IMS (P-CSCF, I-CSCF, S-CSCF)", "Diameter (Gx, Cx, Rx, S6a)", "DNS", "IPsec"] },
    { title: "Platforms",
      items: ["Oracle SBC", "Perimeta SBC", "ng-voice IMS", "Huawei ENUM", "Huawei MSX3000", "B2BUA Soft Switches"] },
    { title: "Tools",
      items: ["Wireshark", "Empirix", "Perimeta SAZ", "Oracle Session Monitor", "RADCOM", "Nagios"],
      note: "Deep packet inspection & infrastructure monitoring." }
  ],

  /* ---- Projects ---- */
  projects: {
    lead: "Brownfield deployments driving infrastructure modernization and operational resilience.",
    items: [
      { date: "12 / 2026", title: "STIR/SHAKEN implementation",
        text: "Mitigated Robo/Spam calls for LM France by signing & certifying - in compliance with France's regulatory body - APNF" },
	  { date: "02 / 2025", title: "Datacenter Migration - London",
        text: "Performed zero-downtime cutover of production SBCs, softswitch, and L2/L3 devices - maintaining 100% service continuity across voice infrastructure." },
      { date: "01 / 2024", title: "VoLTE Integration",
        text: "Integrated our in-house IMS platform with existing NSA infrastructure for Lyca Mobile - enabling seamless VoLTE service delivery for European countries." },
      { date: "06 / 2022", title: "Media Anchoring Modernization",
        text: "Migrated media relay from TDM to IP networks - eliminating legacy interconnects and reducing operational complexity." }
    ],
  },

  /* ---- Experience: newest first. Each bullet is one string. ---- */
  experience: [
    { role: "Lead Engineer",
      company: "Lyca Mobile · Chennai, IN",
      period: "03/2023 – Present",
      bullets: [
        "Provisioned, maintained P2P IPSec tunnel for securing control & media plane traffic over public internet", 
		"Direct fault management operations for MVNO network - driving incident resolution and service quality.",
        "Planned, deployed, and maintained Oracle B2BUA SBCs (6350) - owning version upgrades and security patch management.",
        "Creating & Reviewing network architecture documentation (HLD/LLD) using Visio - enabling cross-functional alignment.",
        "Maintained Lawful Interception system by Nexburg for LM Switerland.",
		"Acted as change owner for the controlled changes in the network - allowing smoother rollout and rollback."
      ] },
    { role: "Technical Delivery Professional",
      company: "BT · Bangalore, IN",
      period: "10/2022 – 02/2023",
      bullets: [
        "Part of global RCE team managing international toll-free and GSIP voice services in 24x7 environment.",
        "Resolved customer incidents using NOAS and Meta SBC within strict SLA windows.",
        "Leveraged Empirix, RADCOM, and Nagios for proactive monitoring and incident detection.",
        "Coordinated with L3 and vendor teams - escalating complex technical issues for resolution."
      ] },
    { role: "Voice Config Specialist",
      company: "Liquid Intelligent Technologies · Pune, IN",
      period: "06/2021 – 09/2022",
      bullets: [
        "L2 NOC engineer delivering enterprise and wholesale customer configurations.",
        "Provisioned L2, L3, VoIP, and POI services across Huawei IMS, NGN, and Perimeta SBC platforms.",
        "Managed OneAccess CPE devices for service delivery and enhancement.",
        "Handled critical incidents in 24x7 environment - maintaining high availability."
      ] },
    { role: "L2 Support Engineer",
      company: "Phonology IT Solutions · Bangalore, IN",
      period: "03/2018 – 05/2021",
      bullets: [
        "Provisioned SIP trunking solutions for enterprise, retail, and SMB customers using Telinta softswitch.",
        "Delivered full-stack UCaaS solutions - cloud PBX, IVRs, conferencing, unified messaging, and call analytics."
      ] },
    { role: "Technical Support Engineer",
      company: "Microvillage Communications · Bangalore, IN",
      period: "02/2016 – 02/2018",
      bullets: [
        "Support engineer for IP-PBX, IP phones, and voice gateways across multiple vendors.",
        "Designed call center architectures and integrated customer networks with CRM ecosystems."
      ] }
  ],

  /* ---- Credentials ('issuer' is optional) ---- */
  certifications: [
    { title: "Certified SIP School Associate (SSCA)", date: "03 / 2022" },
    { title: "Perimeta MCT Theory Exam", issuer: "Metaswitch Networks", date: "08 / 2021" },
    { title: "Certified UC Specialist", issuer: "Grandstream Networks", date: "02 / 2018" }
  ],

  education: [
    { degree: "Bachelor's in Computer Science",
      school: "K.S. Rangasamy College of Technology",
      period: "08/2011 – 04/2015" }
  ],

  languages: [
    { level: "Native", name: "Tamil" },
    { level: "Proficient", name: "English" },
    { level: "Spoken", name: "Telugu" },
    { level: "Spoken", name: "Kannada" }
  ],

  interests: [
    "Cricket and kabaddi",
    "Professional drone videography",
    "Technology & innovation content",
    "Social awareness volunteering"
  ],

  /* ---- Contact section (email/phone/LinkedIn/GitHub come from 'person') ---- */
  contact: {
    lead: "Open to conversations about VoIP/IMS architecture, fault management, and Solution Architect roles combining SIP/IMS core with cloud-native technologies. Based in Chennai, India.",
    cta: "💡 Interested in exploring Solution Architect opportunities? Let's connect.",
    extra: []   // optional more cards, e.g. { label: "Blog", value: "example.com", href: "https://example.com" }
  },

  /* ---- Header dropdown (tools/repos). Set items: [] to hide it. ---- */
  dropdown: {
    label: "Projects",
    items: [
      { name: "amr_player",    url: "https://kesavagokul.com/amr_player",    desc: "AMR/WB to WAV converter" },
      { name: "evs_player",    url: "https://kesavagokul.com/evs_player",    desc: "EVS player conversion" },
      { name: "kamailio-k8s",  url: "https://kesavagokul.com/kamailio-k8s",  desc: "Kamailio k8s config" },
      { name: "pcap2sipp",     url: "https://kesavagokul.com/pcap2sipp",     desc: "PCAP to SIPp converter" },
      { name: "trace_compare", url: "https://kesavagokul.com/trace_compare", desc: "Compare PCAP traces" },
      { name: "txt2pcap_ss7",  url: "https://kesavagokul.com/txt2pcap_ss7",  desc: "SS7 text to PCAP" }
    ]
  }
};
