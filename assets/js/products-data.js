const productsData = [
  {
    title: "Rocket Reel",
    description: "A compact, waterproof hand-line fishing reel built for lightweight backcountry fishing anywhere you roam.",
    image: "../assets/images/rocket-reel.png",
    manual: "../assets/docs/Rocket-Reel-Manual.pdf",
    parts: "../parts/",
    etsy: "https://www.etsy.com/listing/YOUR-ROCKET-REEL-LINK",
    search: "rocket reel fishing hand line reel manual parts etsy"
  },
  {
    title: "Timber Tickler 6N",
    description: "A pocket-sized precision cutter built for quick, clean work on small branches, overgrown brush, and campfire prep.",
    image: "../assets/images/6ntimbertickler.png",
    manual: "../assets/docs/Timber-Tickler-6N-Manual.pdf",
    parts: "../parts/",
    etsy: "https://www.etsy.com/listing/YOUR-TIMBER-TICKLER-6N-LINK",
    search: "timber tickler 6n manual parts etsy"
  },
  {
    title: "Timber Tickler 9N",
    description: "A capable pruning saw built for clearing branches, trail work, and handling those not-so-little limbs around camp.",
    image: "../assets/images/9ntimbertickler.png",
    manual: "../assets/docs/Timber-Tickler-9N-Manual.pdf",
    parts: "../parts/",
    etsy: "https://www.etsy.com/listing/YOUR-TIMBER-TICKLER-9N-LINK",
    search: "timber tickler 9n manual parts etsy"
  },
  {
    title: "Timber Tickler 9W",
    description: "A wide-blade field saw designed for bigger limbs and tougher cutting jobs around camp or on the trail.",
    image: "../assets/images/9wtimbertickler.png",
    manual: "../assets/docs/Timber-Tickler-9W-Manual.pdf",
    parts: "../parts/",
    etsy: "https://www.etsy.com/listing/YOUR-TIMBER-TICKLER-9W-LINK",
    search: "timber tickler 9w manual parts etsy"
  },
  {
    title: "Timber Tickler 12N",
    description: "A long-reach pruning saw built for thicker branches without sacrificing precision and control.",
    image: "../assets/images/12ntimbertickler.png",
    manual: "../assets/docs/Timber-Tickler-12N-Manual.pdf",
    parts: "../parts/",
    etsy: "https://www.etsy.com/listing/YOUR-TIMBER-TICKLER-12N-LINK",
    search: "timber tickler 12n manual parts etsy"
  },
  {
    title: "Timber Tickler 12W",
    description: "A wide-blade field saw designed to tackle serious branches while still keeping your pack light.",
    image: "../assets/images/12wtimbertickler.png",
    manual: "../assets/docs/Timber-Tickler-12W-Manual.pdf",
    parts: "../parts/",
    etsy: "https://www.etsy.com/listing/YOUR-TIMBER-TICKLER-12W-LINK",
    search: "timber tickler 12w manual parts etsy"
  },
  {
    title: "Walletül Release",
    description: "A rugged everyday wallet with a self-resetting QuadCam lift system that holds your cards and cash while pulling double duty as a lightweight pocket multi-tool.",
    image: "../assets/images/walletul.png",
    manual: "../assets/docs/Walletul-Release-Manual.pdf",
    parts: "../parts/",
    etsy: "https://www.etsy.com/listing/YOUR-WALLETUL-LINK",
    search: "walletul walletül release manual parts etsy"
  },
  {
    title: "Yak Rack",
    description: "A rugged kayak gear mount that keeps your Rocket Reel and Tackle Toter secure, organized, and ready while you paddle.",
    image: "../assets/images/YakRack.png",
    manual: "../assets/docs/Yak-Rack-Manual.pdf",
    parts: "../parts/",
    etsy: "https://www.etsy.com/listing/YOUR-YAK-RACK-LINK",
    search: "yak rack manual parts etsy"
  },
  {
    title: "Reel Rack",
    description: "A compact reel mount that clips your Rocket Reel onto chairs, poles, or rails so you can fish hands-free.",
    image: "../assets/images/reelrack.png",
    manual: "../assets/docs/Reel-Rack-Manual.pdf",
    parts: "../parts/",
    etsy: "https://www.etsy.com/listing/YOUR-REEL-RACK-LINK",
    search: "reel rack manual parts etsy"
  },
  {
    title: "Blaster Master",
    description: "A lightweight three-in-one trail hygiene attachment that converts a standard bottle into a shower, bidet, or secure cap.",
    image: "../assets/images/BlasterMaster.png",
    manual: "../assets/docs/Blaster-Master-Manual.pdf",
    parts: "../parts/",
    etsy: "https://www.etsy.com/listing/YOUR-BLASTER-MASTER-LINK",
    search: "blaster master manual parts etsy"
  },
  {
    title: "Tackle Toter L7C",
    description: "A compact tactical tackle organizer with seven covered compartments and a front Rocket Reel mount for quick-access fishing gear.",
    image: "../assets/images/l7ctackletoter.png",
    manual: "../assets/docs/Tackle-Toter-L7C-Manual.pdf",
    parts: "../parts/",
    etsy: "https://www.etsy.com/listing/YOUR-TACKLE-TOTER-L7C-LINK",
    search: "tackle toter l7c manual parts etsy"
  },
  {
    title: "Tackle Toter L12C",
    description: "A high-capacity tackle organizer with twelve covered compartments and a front Rocket Reel mount for organized fishing on the move.",
    image: "../assets/images/l12ctackletoter.png",
    manual: "../assets/docs/Tackle-Toter-L12C-Manual.pdf",
    parts: "../parts/",
    etsy: "https://www.etsy.com/listing/YOUR-TACKLE-TOTER-L12C-LINK",
    search: "tackle toter l12c manual parts etsy"
  },
  {
    title: "Tackle Toter M7C",
    description: "A slim-profile tackle organizer with seven covered compartments and a front Rocket Reel mount for lightweight fishing setups.",
    image: "../assets/images/m7ctackletoter.png",
    manual: "../assets/docs/Tackle-Toter-M7C-Manual.pdf",
    parts: "../parts/",
    etsy: "https://www.etsy.com/listing/YOUR-TACKLE-TOTER-M7C-LINK",
    search: "tackle toter m7c manual parts etsy"
  },
  {
    title: "Tackle Toter M12C",
    description: "A slim-profile tackle organizer with twelve covered compartments and a front Rocket Reel mount for streamlined fishing setups.",
    image: "../assets/images/m12ctackletoter.png",
    manual: "../assets/docs/Tackle-Toter-M12C-Manual.pdf",
    parts: "../parts/",
    etsy: "https://www.etsy.com/listing/YOUR-TACKLE-TOTER-M12C-LINK",
    search: "tackle toter m12c manual parts etsy"
  },
  {
    title: "Tackle Toter S7C",
    description: "A small but capable tackle organizer with seven covered compartments and a front Rocket Reel mount for minimal fishing setups.",
    image: "../assets/images/s7ctackletoter.png",
    manual: "../assets/docs/Tackle-Toter-S7C-Manual.pdf",
    parts: "../parts/",
    etsy: "https://www.etsy.com/listing/YOUR-TACKLE-TOTER-S7C-LINK",
    search: "tackle toter s7c manual parts etsy"
  },
  {
    title: "Tack Rack",
    description: "A lightweight tackle mount that clips your Tackle Toter onto chairs, poles, or rails for easy access while you fish.",
    image: "../assets/images/tackrack.png",
    manual: "../assets/docs/Tack-Rack-Manual.pdf",
    parts: "../parts/",
    etsy: "https://www.etsy.com/listing/YOUR-TACK-RACK-LINK",
    search: "tack rack manual parts etsy"
  },

  // Coming Soon
  {
    title: "Cap Light Caddy",
    description: "A clever little mount that turns your Nitecore NU25 into a cap light, hanging lantern, or flat map light for camp and trail use.",
    image: "../assets/images/caplightcaddy.png",
    manual: "#",
    parts: "#",
    etsy: "#",
    search: "cap light caddy coming soon prototype",
    comingSoon: true
  },
  {
    title: "Ridge Rack 3.25 Cup Holder",
    description: "A compact cup holder that mounts to chairs, round surfaces, or the Yak Rack to securely hold cups or bottles up to 3.25 inches in diameter.",
    image: "../assets/images/325cupholder.png",
    manual: "#",
    parts: "#",
    etsy: "#",
    search: "3.25 cup holder coming soon prototype",
    comingSoon: true
  },
  {
    title: "Ridge Rack 4.0 Cup Holder",
    description: "A compact cup holder that mounts to chairs, round surfaces, or the Yak Rack to securely hold cups or bottles up to 4.0 inches in diameter.",
    image: "../assets/images/4cupholder.png",
    manual: "#",
    parts: "#",
    etsy: "#",
    search: "3.25 cup holder coming soon prototype",
    comingSoon: true
  },
  {
    title: "Hikers Hotspot",
    description: "A lightweight camp table that secures a stove for cooking or warmth, with a cup holder and versatile mounting for trekking poles, trees, or ground use.",
    image: "../assets/images/HikersHotspot.png",
    manual: "#",
    parts: "#",
    etsy: "#",
    search: "hikers hotspot coming soon prototype",
    comingSoon: true
  },
  {
    title: "Hydro Hanger",
    description: "A lightweight hydration station that clips to belts, packs, or hammocks and lets you drink directly from a Smartwater bottle with or without an extended hose.",
    image: "../assets/images/hydrohanger.png",
    manual: "#",
    parts: "#",
    etsy: "#",
    search: "hydro hanger coming soon prototype",
    comingSoon: true
  },
  {
    title: "Lantern Latcher",
    description: "A lightweight mount that attaches a Nitecore NU25 to a Smartwater bottle to create a portable lantern with adjustable light direction.",
    image: "../assets/images/lanternlatcher.png",
    manual: "#",
    parts: "#",
    etsy: "#",
    search: "lantern latcher coming soon prototype",
    comingSoon: true
  },
  {
    title: "Ridge Rack Double Line Mount",
    description: "A lightweight mount for hammocks with double ridge lines that holds a phone or fan and works within the modular Ridge Rack system for versatile setups.",
    image: "../assets/images/rrdoubleline.png",
    manual: "#",
    parts: "#",
    etsy: "#",
    search: "ridge rack double line mount coming soon prototype",
    comingSoon: true
  },
  {
    title: "Ridge Rack Monopod",
    description: "A super lightweight mount that attaches a phone to a trekking pole and converts it into a stable guyline-supported monopod.",
    image: "../assets/images/rrmonopod.png",
    manual: "#",
    parts: "#",
    etsy: "#",
    search: "ridge rack monopod coming soon prototype",
    comingSoon: true
  },
  {
    title: "Ridge Rack Phone Holder",
    description: "A lightweight phone mount that attaches to chairs or round poles and uses a bungee strap to securely hold your phone while collapsing for easy carry.",
    image: "../assets/images/rrphoneholder.png",
    manual: "#",
    parts: "#",
    etsy: "#",
    search: "ridge rack phone holder coming soon prototype",
    comingSoon: true
  },
  {
    title: "Ridge Rack Pole Mount",
    description: "A lightweight pole mount that secures a phone or fan to chairs, tent poles, or round surfaces as part of the modular Ridge Rack system.",
    image: "../assets/images/rrpole.png",
    manual: "#",
    parts: "#",
    etsy: "#",
    search: "ridge rack pole mount coming soon prototype",
    comingSoon: true
  },
  {
    title: "Ridge Rack Single Line Mount",
    description: "A lightweight mount for hammocks with single ridge lines that holds a phone or fan and works within the modular Ridge Rack system for versatile setups.",
    image: "../assets/images/rrsingleline.png",
    manual: "#",
    parts: "#",
    etsy: "#",
    search: "ridge rack single line mount coming soon prototype",
    comingSoon: true
  },
  {
    title: "Tiny Tunes Trekker",
    description: "A compact Bluetooth speaker that mounts to hammock ridge lines or flat surfaces for music or nighttime white noise at camp.",
    image: "../assets/images/tinytunestrekker.png",
    manual: "#",
    parts: "#",
    etsy: "#",
    search: "tiny tunes trekker coming soon prototype",
    comingSoon: true
  }
];