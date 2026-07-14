const productsData = [
  {
    title: "Rocket Reel",
    description: "A compact, waterproof hand-line fishing reel built for lightweight backcountry fishing anywhere you roam.",
    image: "../assets/images/rocket-reel.png",
    manual: "../assets/docs/Rocket-Reel-Manual.pdf",
    parts: "../parts/",
    etsy: "",
    search: "rocket reel fishing hand line reel manual parts"
  },
  {
    title: "Timber Tickler 6N",
    description: "A pocket-sized precision cutter built for quick, clean work on small branches, overgrown brush, and campfire prep.",
    image: "../assets/images/6ntimbertickler.png",
    manual: "../assets/docs/Timber-Tickler-6N-Manual.pdf",
    parts: "../parts/",
    etsy: "",
    search: "timber tickler 6n manual parts"
  },
  {
    title: "Timber Tickler 9N",
    description: "A capable pruning saw built for clearing branches, trail work, and handling those not-so-little limbs around camp.",
    image: "../assets/images/9ntimbertickler.png",
    manual: "../assets/docs/Timber-Tickler-9N-Manual.pdf",
    parts: "../parts/",
    etsy: "",
    search: "timber tickler 9n manual parts"
  },
  {
    title: "Timber Tickler 12N",
    description: "A long-reach pruning saw built for thicker branches without sacrificing precision and control.",
    image: "../assets/images/12ntimbertickler.png",
    manual: "../assets/docs/Timber-Tickler-12N-Manual.pdf",
    parts: "../parts/",
    etsy: "",
    search: "timber tickler 12n manual parts"
  },
  {
    title: "Walletül Release",
    description: "A rugged everyday wallet with a self-resetting QuadCam lift system that holds your cards and cash while pulling double duty as a lightweight pocket multi-tool.",
    image: "../assets/images/walletul.png",
    manual: "../assets/docs/Walletul-Release-Manual.pdf",
    parts: "../parts/",
    etsy: "",
    search: "walletul walletül release manual parts"
  },
  {
    title: "Ridge Rack 3.25 Cup Holder",
    description: "A compact cup holder that mounts to chairs, odd shapes, or the Yak Rack to securely hold cups or bottles up to 3.25 inches in diameter.",
    image: "../assets/images/325cupholder.png",
    manual: "../assets/docs/Ridge-Rack-Cup-Holder-3.25-Manual.pdf",
    parts: "../parts/",
    etsy: "",
    search: "3.25 cup holder manual parts"
  },
  {
    title: "Ridge Rack 4.0 Cup Holder",
    description: "A compact cup holder that mounts to chairs, odd shapes, or the Yak Rack to securely hold cups or bottles up to 4.0 inches in diameter.",
    image: "../assets/images/4cupholder.png",
    manual: "../assets/docs/Ridge-Rack-Cup-Holder-4.0-Manual.pdf",
    parts: "../parts/",
    etsy: "",
    search: "4.00 cup holder manual parts"
  },
  {
    title: "Ridge Rack Phone Holder",
    description: "A lightweight phone mount that attaches to chairs or odd shapes and uses a bungee strap to securely hold your phone while collapsing for easy carry.",
    image: "../assets/images/rrphoneholder.png",
    manual: "../assets/docs/Ridge-Rack-Phone-Holder-Manual.pdf",
    parts: "../parts/",
    etsy: "",
    search: "ridge rack phone holder manual parts"
  },
{
    title: "Ridge Rack Minipod Mount",
    description: "A lightweight mount for tableops and flat surfaces that holds a phone or fan and works within the modular Ridge Rack system for versatile setups.",
    image: "../assets/images/minipod.png",
    manual: "../assets/docs/Ridge-Rack-Manual.pdf",
    parts: "../parts/",
    etsy: "",
    search: "ridge rack minipod mount manual parts"
  },
  {
    title: "Ridge Rack Single Line Mount",
    description: "A lightweight mount for hammocks with single ridge lines that holds a phone or fan and works within the modular Ridge Rack system for versatile setups.",
    image: "../assets/images/rrsingleline.png",
    manual: "../assets/docs/Ridge-Rack-Manual.pdf",
    parts: "../parts/",
    etsy: "",
    search: "ridge rack single line mount manual parts"
  },
  {
    title: "Ridge Rack Double Line Mount",
    description: "A lightweight mount for hammocks with double ridge lines that holds a phone or fan and works within the modular Ridge Rack system for versatile setups.",
    image: "../assets/images/rrdoubleline.png",
    manual: "../assets/docs/Ridge-Rack-Manual.pdf",
    parts: "../parts/",
    etsy: "",
    search: "ridge rack double line mount manual parts"
  },
 {
    title: "Ridge Rack Universal Mount",
    description: "A lightweight universal mount that secures a phone or fan to chairs, tent poles, or odd shaped surfaces as part of the modular Ridge Rack system.",
    image: "../assets/images/universal_mount.png",
    manual: "../assets/docs/Ridge-Rack-Manual.pdf",
    parts: "../parts/",
    etsy: "",
    search: "ridge rack universal mount manual parts"
  },
 {
    title: "Ridge Rack Pole Mount",
    description: "A lightweight pole mount that secures a phone or fan to chairs, tent poles, or round surfaces as part of the modular Ridge Rack system.",
    image: "../assets/images/rrpole.png",
    manual: "../assets/docs/Ridge-Rack-Manual.pdf",
    parts: "../parts/",
    etsy: "",
    search: "ridge rack pole mount manual parts"
  },
  {
    title: "Ridge Rack Monopod",
    description: "A super lightweight mount that attaches a phone to a trekking pole and converts it into a stable guyline-supported monopod.",
    image: "../assets/images/rrmonopod.png",
    manual: "../assets/docs/Ridge-Rack-Manual.pdf",
    parts: "../parts/",
    etsy: "",
    search: "ridge rack monopod manual parts"
  },
  {
    title: "Yak Rack",
    description: "A rugged kayak gear mount that keeps your Rocket Reel and Tackle Toter secure, organized, and ready while you paddle.",
    image: "../assets/images/YakRack.png",
    manual: "../assets/docs/Yak-Rack-Manual.pdf",
    parts: "../parts/",
    etsy: "",
    search: "yak rack manual parts"
  },
  {
    title: "Reel Rack",
    description: "A compact reel mount that clips your Rocket Reel onto chairs, poles, or rails so you can fish hands-free.",
    image: "../assets/images/reelrack.png",
    manual: "../assets/docs/Reel-Rack-Manual.pdf",
    parts: "../parts/",
    etsy: "",
    search: "reel rack manual parts"
  },
  {
    title: "Blaster Master",
    description: "A lightweight three-in-one trail hygiene attachment that converts a standard bottle into a shower, bidet, or secure cap.",
    image: "../assets/images/BlasterMaster.png",
    manual: "../assets/docs/Blaster-Master-Manual.pdf",
    parts: "../parts/",
    etsy: "",
    search: "blaster master manual parts"
  },
  {
    title: "Tackle Toter L7C",
    description: "A compact tactical tackle organizer with seven covered compartments and a front Rocket Reel mount for quick-access fishing gear.",
    image: "../assets/images/l7ctackletoter.png",
    manual: "../assets/docs/Tackle-Toter-L7C-Manual.pdf",
    parts: "../parts/",
    etsy: "",
    search: "tackle toter l7c manual parts"
  },
  {
    title: "Tackle Toter L12C",
    description: "A high-capacity tackle organizer with twelve covered compartments and a front Rocket Reel mount for organized fishing on the move.",
    image: "../assets/images/l12ctackletoter.png",
    manual: "../assets/docs/Tackle-Toter-L12C-Manual.pdf",
    parts: "../parts/",
    etsy: "",
    search: "tackle toter l12c manual parts"
  },
  {
    title: "Tackle Toter M7C",
    description: "A slim-profile tackle organizer with seven covered compartments and a front Rocket Reel mount for lightweight fishing setups.",
    image: "../assets/images/m7ctackletoter.png",
    manual: "../assets/docs/Tackle-Toter-M7C-Manual.pdf",
    parts: "../parts/",
    etsy: "",
    search: "tackle toter m7c manual parts"
  },
  {
    title: "Tackle Toter M12C",
    description: "A slim-profile tackle organizer with twelve covered compartments and a front Rocket Reel mount for streamlined fishing setups.",
    image: "../assets/images/m12ctackletoter.png",
    manual: "../assets/docs/Tackle-Toter-M12C-Manual.pdf",
    parts: "../parts/",
    etsy: "",
    search: "tackle toter m12c manual parts"
  },
  {
    title: "Tackle Toter S7C",
    description: "A small but capable tackle organizer with seven covered compartments and a front Rocket Reel mount for minimal fishing setups.",
    image: "../assets/images/s7ctackletoter.png",
    manual: "../assets/docs/Tackle-Toter-S7C-Manual.pdf",
    parts: "../parts/",
    etsy: "",
    search: "tackle toter s7c manual parts"
  },
  {
    title: "Tack Rack",
    description: "A lightweight tackle mount that clips your Tackle Toter onto chairs, poles, or rails for easy access while you fish.",
    image: "../assets/images/tackrack.png",
    manual: "../assets/docs/Tack-Rack-Manual.pdf",
    parts: "../parts/",
    etsy: "",
    search: "tack rack manual parts"
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