export const profile = {
  name: "Xuanpei Chen",
  initials: "XC",
  avatar: "images/IMG_4424.JPG",
  role: "Game Developer & AI Programmer",
  location: "Manchester, United Kingdom",
  email: "caesar20040723@gmail.com",
  github: "https://github.com/Caesar723",
  githubLabel: "github.com/Caesar723"
};

export const cvUrl = "files/CV_XuanpeiChen.pdf";

export const skills = [
  { group: "Languages", items: ["Python", "JavaScript", "C#", "HTML5 Canvas", "CSS"] },
  { group: "Game Development", items: ["Unity", "Unreal", "Pygame", "OpenGL", "Canvas 2D", "WebSocket", "Netcode"] },
  { group: "Backend & Data", items: ["FastAPI", "AsyncIO", "SQLAlchemy", "MySQL", "MongoDB"] },
  { group: "AI & ML", items: ["PyTorch", "Reinforcement Learning", "PPO", "DQN", "VAE-GAN", "Transformer", "DINOv3", "MMPose"] },
  { group: "Systems", items: ["Multiprocessing", "Multithreading", "NumPy", "ctypes", "Docker", "Kubernetes"] },
  { group: "Tools", items: ["Git", "Vim", "Jenkins", "Unreal Engine", "Alibaba Cloud", "Kasm"] }
];

export const experience = [
  {
    role: "AI Programmer Intern",
    organisation: "MuteGravity-Face Swap AI · Shanghai, China",
    period: "Jun. 2025 - Aug. 2025",
    highlights: [
      "Independently delivered a facial-expression parameter conversion pipeline from real human video to MetaHuman parameters; the project was adopted for internal use.",
      "Used Pixel3DMM normal maps for lighting augmentation and optimized Unreal Engine data collection scripts from 2 seconds per image to 50 images per second.",
      "Built a VAE-GAN conversion model and combined DINOv3 features with a temporal Transformer to generate stable, jitter-free facial parameters."
    ]
  },
  {
    role: "Test Engineering Intern",
    organisation: "Iluvatar CoreX · Shanghai, China",
    period: "Jul. 2024 - Sep. 2024",
    highlights: [
      "Developed Auto Dump with Jenkins to automate model-operator dumping, avoiding cross-system switching and manual function searches; the workflow improved efficiency by over 90%.",
      "Built DQN and PPO models with PyTorch, and gained practical deployment experience with SSH, Docker, Kubernetes, and a personal server."
    ]
  },
  {
    role: "Game Developer · 2-person team",
    organisation: "University of Manchester Autumn Game Jam · Manchester, UK",
    period: "Oct. 2024",
    highlights: ["Built Stop Ghosting Me in Unity and placed second, using local Netcode connections to support its multi-window interaction concept."]
  }
];

export const education = [
  {
    degree: "BSc Computer Science",
    school: "The University of Manchester",
    period: "Sep. 2024 - Dec. 2027",
    details: "Year 1 average: 80%; Year 2 average: 80%. Areas of interest: Reinforcement Learning, Backend Development, and Game Development."
  },
  {
    degree: "A-levels",
    school: "Shanghai Thomas School",
    period: "Jul. 2021 - Jul. 2023",
    details: "Mathematics (A*), Further Mathematics (A*), Physics (A*), and Computer Science (A)."
  }
];

export const projects = [
  {
    slug: "magic-fan-made",
    title: "Magic Fan Made — Game System",
    period: "Jan. 2024 - Present",
    role: "Full-stack Game Developer",
    status: "Ongoing personal project",
    mediaLabel: "Magic Fan Made",
    mediaDetail: "Game system · add a gameplay capture",
    thumbnail: {
      src: "images/project-thumbnails/magic-fan-made.jpg",
      alt: "Magic Fan Made deck builder gameplay thumbnail."
    },
    summary: "A browser-based card game system covering collection, deck building, roguelike progression, PvE, PvP, and a player-facing card workshop.",
    description: "An ongoing personal game project with more than 32,000 lines of code. I built the gameplay platform, real-time client interaction, backend services, and deployment environment.",
    technologies: ["Python", "FastAPI", "JavaScript", "HTML5 Canvas", "WebSocket", "MySQL", "MongoDB", "Docker"],
    links: [
      { label: "Live Game Site", href: "http://www.xuanpei-chen.top:8000/" },
      { label: "GitHub", href: "https://github.com/Caesar723/Magic" }
    ],
    mediaGallery: {
      title: "Gameplay Function Showcase",
      intro: "A horizontal overview of the main playable systems, using short clips from the actual project so visitors can scan the game features quickly.",
      items: [
        {
          id: "card-draw",
          title: "Card Draw",
          description: "Opening booster packs and revealing cards as part of the collection loop.",
          src: "videos/magic-fan-made/card-draw.mp4",
          poster: "videos/magic-fan-made/card-draw.jpg",
          type: "video/mp4"
        },
        {
          id: "deck-builder",
          title: "Deck Builder",
          description: "Creating and adjusting decks around different strategies and card combinations.",
          src: "videos/magic-fan-made/deck-builder.mp4",
          poster: "videos/magic-fan-made/deck-builder.jpg",
          type: "video/mp4"
        },
        {
          id: "card-studio",
          title: "Card Studio",
          description: "Creating and editing DIY cards through the player-facing card workshop.",
          src: "videos/magic-fan-made/card-studio.mp4",
          poster: "videos/magic-fan-made/card-studio.jpg",
          type: "video/mp4"
        },
        {
          id: "roguelike-mode",
          title: "Roguelike Mode",
          description: "Progressing through roguelike encounters and building a run over time.",
          src: "videos/magic-fan-made/roguelike-mode.mp4",
          poster: "videos/magic-fan-made/roguelike-mode.jpg",
          type: "video/mp4"
        },
        {
          id: "ai-battle",
          title: "AI Battle",
          description: "Playing against an AI opponent through the real-time card battle system.",
          src: "videos/magic-fan-made/ai-battle.mp4",
          poster: "videos/magic-fan-made/ai-battle.jpg",
          type: "video/mp4"
        },
        {
          id: "pvp-battle",
          title: "PvP Battle",
          description: "Real-time player-versus-player interaction over the WebSocket-backed game service.",
          src: "videos/magic-fan-made/pvp-battle.mp4",
          poster: "videos/magic-fan-made/pvp-battle.jpg",
          type: "video/mp4"
        },
        {
          id: "battle-replay",
          title: "Battle Replay",
          description: "Reviewing a finished match through the replay screen and timeline controls.",
          src: "videos/magic-fan-made/battle-replay.mp4",
          poster: "videos/magic-fan-made/battle-replay.jpg",
          type: "video/mp4"
        }
      ]
    },
    sections: [
      { title: "Project Overview", paragraphs: ["Magic Fan Made is a nearly complete browser-based card game system. It includes quests, a shop, card drawing, deck building, a creative workshop, roguelike tower climbing, PvE, and PvP modes.", "This page focuses on the playable platform. The PPO decision-making agent is presented separately in the Magic Fan Made — Game AI case study."] },
      { title: "Game Systems", paragraphs: ["The core game combines collection and deck-building loops with quests, shop interactions, card drawing, roguelike progression, and both player-versus-environment and player-versus-player play.", "FastAPI backend services implement asynchronous features, card drawing, and stack mechanisms."] },
      { title: "Client Experience", paragraphs: ["The client is built with JavaScript and Canvas 2D. WebSocket-based real-time interaction connects the browser client to the game services.", "Matrix transformations and action queues are used to create pseudo-3D effects and smooth animations."] },
      { title: "Creative Workshop", paragraphs: ["Players can create DIY cards through a creative workshop. RestrictedPython is used to support this creation workflow within the project."] },
      { title: "Deployment & Development", paragraphs: ["I created a Docker server image and deployed it on Alibaba Cloud. I also built a Docker and Kasm development environment image to make the project easier to develop and access."] },
      { title: "My Contribution", paragraphs: ["This is a personal project. I developed the frontend and backend, designed and implemented the game systems, built the real-time interaction layer, and created the development and deployment environments."] },
      { title: "Results", paragraphs: ["The project has grown into a game system with over 32,000 lines of code and multiple playable modes. The GitHub repository includes a demo video in its README."] }
    ]
  },
  {
    slug: "magic-fan-made-ai",
    title: "Magic Fan Made — Game AI",
    period: "Jan. 2024 - Present",
    role: "AI Game Programmer",
    status: "Ongoing personal project",
    mediaLabel: "Magic Fan Made",
    mediaDetail: "PPO game agent · add a match or training visual",
    thumbnail: {
      src: "images/project-thumbnails/magic-fan-made.jpg",
      alt: "Magic Fan Made AI battle demo thumbnail."
    },
    summary: "A PPO reinforcement-learning agent integrated into a card game so it can make gameplay decisions and play cards like a human player.",
    description: "The AI is a distinct part of Magic Fan Made: it handles card-play decisions inside the actual game rather than acting as a scripted opponent or a chat interface.",
    technologies: ["Python", "PyTorch", "Reinforcement Learning", "PPO", "Data Encoding", "Model Architecture"],
    links: [{ label: "GitHub", href: "https://github.com/Caesar723/Magic" }],
    mediaGallery: {
      title: "AI Match Demo",
      intro: "A full AI battle demo from the actual game environment.",
      items: [
        {
          id: "ai-battle-demo",
          title: "AI Battle Demo",
          description: "A gameplay recording showing the AI opponent making decisions in the card battle system.",
          src: "videos/magic-fan-made-ai/ai-battle-demo.mp4",
          poster: "videos/magic-fan-made-ai/ai-battle-demo.jpg",
          type: "video/mp4"
        }
      ]
    },
    sections: [
      { title: "Project Overview", paragraphs: ["This project is the AI component of Magic Fan Made. I integrated a PPO reinforcement-learning agent into the card gameplay so that it can make decisions and play cards inside the actual game environment.", "The agent is separate from the playable game platform, but connects to the same card-battle system as an opponent rather than acting as a scripted bot."] },
      {
        title: "State Representation",
        paragraphs: ["The model state is built from hand, battlefield, resource, and history information so the policy can evaluate both immediate plays and turn-based context."],
        bullets: [
          "Hand: cards represented by mana cost, type, color, and feature fields.",
          "Battlefield: hero health, mana, and creatures with attack, defense, and status.",
          "History: turn-based records of past played cards.",
          "Card features: mana cost, type, color, and creature-specific attack / defense values."
        ]
      },
      {
        title: "Action Space",
        paragraphs: ["The action space covers turn control, attack / block selection, and all card-play target patterns for a 40-card deck."],
        bullets: [
          "0: End turn.",
          "1: End bullet time.",
          "2-11: Select one of 10 creature slots to attack.",
          "12-21: Select one of 10 creature slots to block.",
          "22-1341: Play-card actions for a 40-card deck, using 33 target options per card.",
          "Per-card options include no target, enemy creature 0-9, ally creature 0-9, enemy hero, ally hero, and selecting a card 0-9."
        ]
      },
      {
        title: "Reward Design",
        paragraphs: ["The core reward idea is to use the difference in estimated state value: r_t = V(s_{t+1}) - V(s_t).", "The state value function combines board advantage, health difference, mana resources, and hand resources: V(s) = Board + Health + Mana + Hand."],
        bullets: [
          "Board: creature advantage and battlefield pressure.",
          "Health: difference between player and opponent health.",
          "Mana: available resource advantage.",
          "Hand: remaining hand-resource advantage."
        ]
      },
      {
        title: "Stabilisation",
        paragraphs: ["The reward signal is clipped and terminal outcomes are handled separately so step rewards do not dominate the final game result."],
        bullets: [
          "Step reward clipped to [-0.3, 0.3].",
          "Terminal reward: win = +1, lose = -1.",
          "Reward visualization was added in the game client to inspect how each component changes during agent actions."
        ],
        media: [
          {
            id: "reward-visualization",
            title: "Reward Visualization",
            description: "In-game debug view showing the reward components during an agent action.",
            src: "images/magic-fan-made-ai/reward-visualization.jpg",
            alt: "Game screen with reward component values overlaid during an AI decision."
          }
        ]
      },
      {
        title: "Training Feedback",
        paragraphs: ["The TensorBoard run tracks global_reward, reward_train, and success_rate. The displayed training curves show reward and success-rate improvements over roughly 500k steps, with success_rate stabilising above the early-training baseline."],
        media: [
          {
            id: "tensorboard-training",
            title: "TensorBoard Training Curves",
            description: "Global reward, reward_train, and success_rate curves from the PPO training run.",
            src: "images/magic-fan-made-ai/tensorboard-training.jpg",
            alt: "TensorBoard charts showing global reward, reward train, and success rate during training."
          }
        ]
      },
      { title: "Results", paragraphs: ["The improved AI achieved over a 90% win rate against previous AI versions. This result is a comparison with earlier versions of the project's own AI, separate from the TensorBoard success-rate curve shown for a training run."] },
      { title: "My Contribution", paragraphs: ["This is part of my personal project. I designed the state encoding, action-space mapping, reward function, reward debugging visualization, and PPO integration, then connected the trained agent to the real Magic Fan Made battle environment."] }
    ]
  },
  {
    slug: "mutegravity-face-swap-ai",
    title: "MuteGravity — Face Swap AI",
    period: "Jun. 2025 - Aug. 2025",
    role: "AI Programmer Intern",
    status: "Internship project · adopted internally",
    mediaLabel: "Face Swap AI",
    mediaDetail: "Final facial-conversion result · internal project",
    thumbnail: {
      src: "videos/mutegravity-face-swap-ai/final-result.jpg",
      alt: "Face Swap AI final conversion result thumbnail."
    },
    summary: "A facial-conversion and MetaHuman expression pipeline covering Control Rig conversion, real-video to MetaHuman translation, data augmentation, and temporal modelling.",
    description: "During an AI programming internship, I independently developed a complete expression-parameter conversion project that moved between real human video, MetaHuman facial output, and Control Rig data.",
    technologies: ["Unreal Engine", "MetaHuman", "Control Rig", "Pixel3DMM", "X-NeMo", "DINOv2", "DINOv3", "Motion Encoder", "VAE-GAN", "Temporal Transformer", "Spatial Transformer", "Python"],
    links: [
      { label: "X-NeMo Inference", href: "https://github.com/bytedance/x-nemo-inference" },
      { label: "Pixel3DMM", href: "https://github.com/SimonGiebenhain/pixel3dmm" }
    ],
    mediaGallery: {
      title: "Final Result",
      intro: "A short final-output demo from the face-swap and MetaHuman conversion pipeline.",
      items: [
        {
          id: "face-swap-final-result",
          title: "Final Conversion Demo",
          description: "Final visual result from the internal face-swap AI workflow.",
          src: "videos/mutegravity-face-swap-ai/final-result.mp4",
          poster: "videos/mutegravity-face-swap-ai/final-result.jpg",
          type: "video/mp4"
        }
      ]
    },
    sections: [
      { title: "Project Overview", paragraphs: ["The project focused on facial-expression conversion for an internal facial-animation workflow. It connects real human video, MetaHuman output, and Control Rig data so expression information can move across those representations.", "The project was adopted and applied internally after the internship."] },
      {
        title: "Model 1 · Control Rig and MetaHuman Conversion",
        paragraphs: ["The first model handled bidirectional conversion between facial Control Rig data and MetaHuman facial output."],
        bullets: [
          "Control Rig to MetaHuman face conversion.",
          "MetaHuman face to Control Rig conversion.",
          "Goal: make accurate facial-control data usable inside the MetaHuman rendering and animation workflow."
        ]
      },
      {
        title: "Model 2 · Real Face and MetaHuman Shared Latent Space",
        paragraphs: ["The second model converted real human video into MetaHuman output, and also supported conversion from MetaHuman back to real human appearance. It used an encoder-decoder structure with a two-headed decoder: the encoder maps real faces and MetaHuman faces into the same latent space, while separate decoder heads reconstruct the real-human and MetaHuman domains.", "The training objective included direct reconstruction loss and a cycle-consistency reconstruction loss: after passing through one domain, the output is converted back through the other domain and reconstructed again. I also created VAE and GAN variants of this model."],
        bullets: [
          "Shared encoder for real-human and MetaHuman face representations.",
          "Two decoder heads: one for real-human output and one for MetaHuman output.",
          "Direct reconstruction loss for each domain.",
          "Cycle-consistency reconstruction loss for cross-domain round-trip consistency.",
          "VAE and GAN model variants for higher-quality conversion experiments."
        ]
      },
      {
        title: "Model 3 · Pretrained Visual Features and Temporal Modelling",
        paragraphs: ["The third model used pretrained visual features and sequence modelling to improve stability in video conversion. It used DINOv2, DINOv3, or a lighter motion encoder from X-NeMo Inference, then combined those features with temporal and spatial Transformer blocks.", "A contrastive loss was used to improve feature alignment and make the learned representation more stable across frames and domains."],
        bullets: [
          "Feature extraction with DINOv2, DINOv3, or the X-NeMo motion encoder.",
          "Temporal Transformer for frame-to-frame consistency.",
          "Spatial Transformer for facial-region feature modelling.",
          "Contrastive loss for representation alignment."
        ]
      },
      {
        title: "Data Collection",
        paragraphs: ["I wrote Unreal Engine scripts to import Control Rig data into Unreal and render high-precision facial-expression data. This made it possible to control lighting, camera angle, and facial expression during data generation."],
        bullets: [
          "Imported Control Rig data into Unreal Engine.",
          "Rendered accurate MetaHuman facial data under controlled lighting and camera angles.",
          "Generated expression data with controllable facial parameters."
        ]
      },
      {
        title: "Data Augmentation",
        paragraphs: ["For real-human face augmentation, I used X-NeMo Inference together with MetaHuman generation to create more real-human training data. I also used Pixel3DMM to generate normal maps, which supported lighting-based augmentation."],
        bullets: [
          "Used X-NeMo Inference and MetaHuman generation to expand real-human facial data.",
          "Used Pixel3DMM normal maps for lighting augmentation.",
          "Expanded training coverage across lighting, angle, and expression variation."
        ]
      },
      { title: "Performance Improvement", paragraphs: ["The optimized Unreal Engine data-collection workflow improved from 2 seconds per image to 50 images per second."] },
      { title: "My Contribution", paragraphs: ["I independently led the parameter-conversion project, including Unreal data collection, augmentation, model design, VAE / GAN variants, pretrained feature integration, temporal and spatial modelling, and final result validation."] }
    ]
  },
  {
    slug: "finetune-2d-point-detection-model",
    title: "Fine-tuning a 2D Point Detection Model",
    period: "Jun. 2026 - Present",
    role: "AI Programmer Intern",
    status: "MuteGravity internship project · ongoing",
    mediaLabel: "2D Point Detection",
    mediaDetail: "Trainable model reconstruction · UE synthetic-data pipeline",
    thumbnail: {
      src: "images/project-thumbnails/finetune-2d-point-detection.jpg",
      alt: "2D point detection fine-tuning and Unreal Engine data pipeline thumbnail."
    },
    summary: "A SimCC-based 2D point-detection fine-tuning project where I parsed a provided .pth prediction model, reconstructed a trainable version, and built a UE rendering pipeline for supervised data generation.",
    description: "Built during an AI programmer internship at MuteGravity, the project combined SimCC model reconstruction, loss-function design, and Unreal Engine synthetic-data generation to make an existing prediction-only checkpoint trainable and verifiable.",
    technologies: ["Python", "PyTorch", "SimCC", "Unreal Engine", "Style3D", "MotionBuilder", "BVH", "FBX", "Animation Retargeting", "XRFeitoria", "Soft Cross Entropy", "Student-t Soft Targets", "Wasserstein1DLoss"],
    links: [{ label: "XRFeitoria", href: "https://github.com/openxrlab/xrfeitoria" }],
    mediaGallery: {
      title: "Pipeline Overview",
      intro: "A temporary visual summary of the project: model reconstruction, loss design, and the BVH-to-FBX-to-Unreal rendering data pipeline.",
      items: [
        {
          id: "finetune-2d-point-detection-pipeline",
          title: "2D Point Detection Pipeline",
          description: "Temporary project thumbnail showing the synthetic-data and fine-tuning workflow.",
          src: "images/project-thumbnails/finetune-2d-point-detection.jpg",
          alt: "A visual summary of the 2D point detection fine-tuning pipeline.",
          kind: "image"
        }
      ]
    },
    sections: [
      { title: "Project Overview", paragraphs: ["This is an ongoing MuteGravity internship project from June 2026. I worked on it as an AI Programmer Intern.", "I received a prediction model as a .pth checkpoint. The model used SimCC-style coordinate classification for 2D point detection. The core task was to parse the checkpoint, reverse-engineer it into a trainable model structure, and verify that the reconstructed trainable model matched the original prediction model.", "After reconstructing the model, I designed the fine-tuning objective and connected it to a synthetic-data pipeline generated through Unreal Engine rendering."] },
      {
        title: "Model Reconstruction and Verification",
        paragraphs: ["The first technical challenge was turning a prediction-only checkpoint into a model that could be trained again."],
        bullets: [
          "Parsed the provided .pth model to understand the layer structure and parameter layout.",
          "Reconstructed a trainable PyTorch model compatible with the checkpoint and its SimCC output format.",
          "Validated correctness by comparing the reconstructed trainable model against the original prediction model."
        ]
      },
      {
        title: "Loss Design",
        paragraphs: ["The model used SimCC, representing each 2D point through 1D coordinate distributions. The loss design used distribution-aware supervision so the model could learn from soft coordinate targets rather than only hard labels."],
        bullets: [
          "Soft Cross Entropy was applied to Student's t-distribution soft targets for robust coordinate-distribution supervision.",
          "Wasserstein1DLoss to constrain the 1D distribution distance of predicted point locations."
        ]
      },
      {
        title: "UE Rendering Data Pipeline",
        paragraphs: ["The data-generation pipeline was built around Unreal Engine rendering and was divided into three main stages."],
        bullets: [
          "Stage 1: convert BVH motion files into FBX files. This used MotionBuilder for animation retargeting, with animation cleanup to reduce body or clothing penetration.",
          "Stage 2: generate configuration files. Each rendered video corresponds to a batch of configs describing the FBX animation, map and character placement, clothing, Style3D-related rendering setup, camera trajectory, and camera rotation.",
          "Stage 3: render videos by running Python scripts that operate Unreal Engine through XRFeitoria. The rendering workflow also used Style3D, and the process can render continuously, restart after Unreal crashes, and resume rendering from the existing state."
        ]
      },
      {
        title: "Captured Data",
        paragraphs: ["For each rendering run, the pipeline collected the information needed for model training and validation."],
        bullets: [
          "Camera parameters.",
          "3D point data.",
          "Skel-hit data.",
          "Rendered video frames."
        ]
      },
      {
        title: "Frame Synchronisation Bug",
        paragraphs: ["A major issue appeared during data collection: the 3D point data had a delay relative to the video, but it was not a simple fixed offset of several frames.", "The root cause was a timing mismatch in the Unreal / XRFeitoria collection flow. 3D point data was collected on each tick, while video frames were saved on rendered frames, so the two timelines were not guaranteed to match.", "I fixed the problem by modifying the 3D point acquisition logic: after each rendered frame was saved, the corresponding 3D point data was saved at the same point in the render loop. This aligned the labels with the video frames."]
      },
      { title: "My Contribution", paragraphs: ["I handled the model parsing and trainable-model reconstruction, designed the loss setup, built the UE rendering data workflow, and fixed the frame / 3D-point synchronisation issue in the data collection pipeline."] }
    ]
  },
  {
    slug: "auto-dump",
    title: "Auto Dump",
    period: "Jul. 2024 - Sep. 2024",
    role: "Test Engineering Intern",
    status: "Iluvatar CoreX internship project",
    mediaLabel: "Auto Dump",
    mediaDetail: "Jenkins automation · internal project",
    thumbnail: {
      src: "images/project-thumbnails/auto-dump.jpg",
      alt: "Auto Dump Jenkins automation thumbnail."
    },
    summary: "A Jenkins-based automation tool for model-operator dumping that removed cross-system switching and manual function searches.",
    description: "Built during a test engineering internship to automate a repetitive operator-dumping workflow inside the company.",
    technologies: ["Jenkins", "Python", "Docker", "Kubernetes", "SSH"],
    links: [],
    sections: [
      { title: "Project Overview", paragraphs: ["Auto Dump automated model-operator dumping with Jenkins during my test engineering internship at Iluvatar CoreX."] },
      { title: "Problem", paragraphs: ["The existing workflow required cross-system switching and manual function searches. The project targeted those repeated manual steps."] },
      { title: "Solution", paragraphs: ["I independently developed the automation project with Jenkins so the dumping workflow could run without those manual searches and system changes."] },
      { title: "Results", paragraphs: ["The workflow improved efficiency by over 90%, according to the internship project result."] },
      { title: "Related Engineering Work", paragraphs: ["During the same internship I gained experience with SSH remote connections, Docker and Kubernetes, including creating and deploying Docker images to a personal server."] }
    ]
  },
  {
    slug: "stop-ghosting-me",
    title: "Stop Ghosting Me",
    period: "Oct. 2024",
    role: "Game Developer · 2-person team",
    status: "University of Manchester Autumn Game Jam · 2nd place",
    mediaLabel: "Stop Ghosting Me",
    mediaDetail: "Unity game jam project · gameplay demo",
    thumbnail: {
      src: "images/project-thumbnails/stop-ghosting-me.jpg",
      alt: "Stop Ghosting Me gameplay demo thumbnail."
    },
    summary: "A Unity game-jam game built around local multi-window interactions, which placed second at the University of Manchester Autumn Game Jam.",
    description: "Built in a two-person team over the game-jam period, the project explored an interaction concept enabled by multiple local game windows.",
    technologies: ["Unity", "C#", "Netcode", "Local Networking"],
    links: [{ label: "GitHub", href: "https://github.com/Caesar723/Stop-Ghosting-Me" }],
    mediaGallery: {
      title: "Gameplay Demo",
      intro: "A short demo showing the local multi-window interaction concept.",
      items: [
        {
          id: "stop-ghosting-me-demo",
          title: "Stop Ghosting Me Demo",
          description: "Unity gameplay demo showing the multi-window interaction and local Netcode connection concept.",
          src: "videos/stop-ghosting-me/demo.mp4",
          poster: "videos/stop-ghosting-me/demo.jpg",
          type: "video/mp4"
        }
      ]
    },
    sections: [
      { title: "Project Overview", paragraphs: ["Stop Ghosting Me was developed during the University of Manchester Autumn Game Jam 2024 by a two-person team. The project placed second in the competition."] },
      { title: "Game Concept", paragraphs: ["The game used multi-window interactions as its core idea. Local connections were established with Netcode to enable this interaction model."] },
      { title: "My Contribution", paragraphs: ["I developed the game with Unity as part of the two-person team and worked on the implementation of the local networking and multi-window interaction concept."] },
      { title: "Results", paragraphs: ["The project achieved second place in the competition, with its multi-window interaction identified as an innovative part of the game."] }
    ]
  },
  {
    slug: "fireworks-simulator",
    aliases: ["birthday-gift-for-kaka"],
    title: "Fireworks Simulator",
    period: "Jul. 2023 - Aug. 2023",
    role: "Personal Project",
    status: "Completed",
    mediaLabel: "Fireworks Simulator",
    mediaDetail: "Matrix-based OpenGL particle simulation",
    thumbnail: {
      src: "images/project-thumbnails/fireworks-simulator.jpg",
      alt: "Fireworks Simulator particle rendering thumbnail."
    },
    summary: "An OpenGL fireworks simulator built around a large fixed-size NumPy matrix for particle state updates and VBO-based particle rendering.",
    description: "A personal simulation project where particle motion is represented as arithmetic over a large fixed-size NumPy matrix, then rendered efficiently through OpenGL VBOs.",
    technologies: ["Python", "NumPy", "OpenGL", "VBO", "Matrix Simulation", "Particle System"],
    links: [{ label: "GitHub", href: "https://github.com/Caesar723/Birthday_gift_for_KaKa/tree/normal" }],
    mediaGallery: {
      title: "Simulator Demo",
      intro: "A short demo showing the fireworks simulator output.",
      items: [
        {
          id: "fireworks-showcase",
          title: "Fireworks Simulation",
          description: "OpenGL particle fireworks driven by matrix-based motion updates.",
          src: "videos/fireworks-simulator/showcase.mp4",
          poster: "videos/fireworks-simulator/showcase.jpg",
          type: "video/mp4"
        }
      ]
    },
    sections: [
      { title: "Project Overview", paragraphs: ["Fireworks Simulator is a personal OpenGL project for simulating firework particles, trajectories, bursts, and visual effects."] },
      { title: "Matrix-based Simulation", paragraphs: ["The core technical design maintains a very large fixed-size NumPy matrix as the particle state container. Each simulation step updates particle position, velocity, lifetime, and visual state through arithmetic operations on this matrix.", "This keeps the simulation data dense and makes the motion update logic direct and efficient."] },
      { title: "Particle Rendering", paragraphs: ["Firework particles are rendered with OpenGL VBOs. Particle state is prepared from the NumPy matrix and sent to the GPU for rendering, reducing per-particle Python-side overhead."] },
      { title: "Motion & Visuals", paragraphs: ["I used mathematical and mechanical motion calculations to simulate firework trajectories, bursts, and multiple visual shapes."] },
      { title: "My Contribution", paragraphs: ["This was a personal project. I designed the matrix-based particle-state system, implemented the arithmetic update loop, and built the VBO rendering path for the fireworks particles."] }
    ]
  },
  {
    slug: "the-day-of-sagittarius-3",
    title: "TheDayOfSagittarius3",
    period: "Apr. 2022 - Jun. 2022",
    role: "Personal Project",
    status: "Completed",
    mediaLabel: "TheDayOfSagittarius3",
    mediaDetail: "Pygame networking project · Bilibili demo",
    thumbnail: {
      src: "images/project-thumbnails/the-day-of-sagittarius-3.jpg",
      alt: "TheDayOfSagittarius3 Pygame networking project thumbnail."
    },
    summary: "A Python and Pygame game core that separates game logic from network communication and moves intensive work into C++ dynamic libraries.",
    description: "A personal game project focused on responsive networking, concurrency, and performance-sensitive computation.",
    technologies: ["Python", "Pygame", "AsyncIO", "Multiprocessing", "C++", "ctypes", "NumPy"],
    links: [
      { label: "GitHub", href: "https://github.com/Caesar723/TheDayOfSagittarius3" },
      { label: "Bilibili Demo", href: "https://www.bilibili.com/video/BV1SL4y1K7Rq" }
    ],
    mediaGallery: {
      title: "Gameplay Demo",
      intro: "An embedded Bilibili demo video for the Pygame networking project.",
      items: [
        {
          id: "the-day-of-sagittarius-3-bilibili",
          title: "TheDayOfSagittarius3 Demo",
          description: "External Bilibili video showing the project demo.",
          src: "https://player.bilibili.com/player.html?bvid=BV1SL4y1K7Rq&page=1&high_quality=1&autoplay=0",
          kind: "embed"
        }
      ]
    },
    sections: [
      { title: "Project Overview", paragraphs: ["TheDayOfSagittarius3 is a personal game project built with Python and Pygame."] },
      { title: "Game & Network Architecture", paragraphs: ["Multiprocessing separated game logic from network communication to improve stability and responsiveness.", "AsyncIO handled asynchronous socket communication for real-time data transmission."] },
      { title: "Performance Work", paragraphs: ["I connected C++ dynamic libraries through ctypes and numpy.ctypeslib for intensive computation, achieving a 20x performance boost.", "I also bypassed Python's GIL using ctypes and multithreading to further improve performance."] }
    ]
  }
];

export const selectedProjects = projects.slice(0, 3);

const englishUi = {
  navAria: "Primary navigation",
  nav: {
    home: "Home",
    projects: "Projects",
    cv: "CV"
  },
  profileAria: "Profile and contact information",
  downloadCv: "Download CV",
  footer: "© Xuanpei Chen · Built as a lightweight static portfolio.",
  languageSwitcher: "Language",
  technologies: "Technologies",
  projectPreviewSuffix: " project preview placeholder",
  projectCoverSuffix: " project cover placeholder",
  viewProject: "View Project",
  status: "Status",
  role: "Role",
  projectLinks: "Project links",
  backToProjects: "Back to Projects",
  scrollVideosLeft: "Scroll videos left",
  scrollVideosRight: "Scroll videos right",
  videoUnavailable: "Video pending",
  notFound: {
    title: "Page not found",
    heading: "Page not found",
    text: "The page you are looking for does not exist or has moved.",
    action: "Return home"
  },
  pages: {
    home: {
      title: "Home",
      heading: "About Me",
      paragraphs: [
        "I am Xuanpei Chen, a Computer Science student at the University of Manchester. My main interests are game development, reinforcement learning, and backend systems.",
        "I like building complete technical systems: from interactive game clients and real-time services to deployment environments and AI agents that make decisions inside the game. My work combines Python, JavaScript, game engines, WebSocket-based interaction, and machine learning.",
        "I am especially interested in roles where game systems, AI, backend engineering, or interactive software overlap. The Projects page shows both the playable systems and the AI work behind them."
      ],
      skillsHeading: "Skills",
      selectedProjectsHeading: "Selected Projects",
      allProjects: "View all projects",
      contactHeading: "Contact",
      contact: {
        beforeEmail: "For opportunities or project conversations, email ",
        afterEmail: ". You can also find me on ",
        github: "GitHub",
        afterGithub: ", or ",
        cv: "download my CV",
        end: "."
      }
    },
    projects: {
      title: "Projects",
      heading: "Projects",
      intro: "Selected work across game systems, reinforcement learning, computer vision, automation, and real-time interaction. Magic Fan Made is presented as two connected case studies: the playable game platform and its PPO decision-making agent.",
      countSuffix: " selected projects"
    },
    cv: {
      title: "CV",
      heading: "CV",
      intro: "A concise HTML version of my CV. Download the PDF for the complete formatted version.",
      experienceHeading: "Experience",
      educationHeading: "Education",
      skillsHeading: "Skills",
      selectedProjectsHeading: "Selected Projects"
    }
  }
};

const chineseUi = {
  navAria: "主导航",
  nav: {
    home: "首页",
    projects: "项目",
    cv: "简历"
  },
  profileAria: "个人资料和联系方式",
  downloadCv: "下载简历",
  footer: "© Xuanpei Chen · 轻量静态个人作品集。",
  languageSwitcher: "语言",
  technologies: "技术栈",
  projectPreviewSuffix: " 项目预览占位图",
  projectCoverSuffix: " 项目封面占位图",
  viewProject: "查看项目",
  status: "状态",
  role: "职责",
  projectLinks: "项目链接",
  backToProjects: "返回项目列表",
  scrollVideosLeft: "向左滚动视频",
  scrollVideosRight: "向右滚动视频",
  videoUnavailable: "视频待添加",
  notFound: {
    title: "页面未找到",
    heading: "页面未找到",
    text: "你访问的页面不存在，或已经移动。",
    action: "返回首页"
  },
  pages: {
    home: {
      title: "首页",
      heading: "关于我",
      paragraphs: [
        "我是 Xuanpei Chen，曼彻斯特大学计算机科学本科生。我的主要兴趣方向是游戏开发、强化学习和后端系统。",
        "我喜欢构建完整的技术系统：从交互式游戏客户端和实时服务，到部署环境，以及能在游戏中做决策的 AI 智能体。我的工作结合了 Python、JavaScript、游戏引擎、基于 WebSocket 的实时交互和机器学习。",
        "我尤其关注游戏系统、AI、后端工程和交互软件交叉的岗位。项目页面展示了可玩的系统，也展示了背后的 AI 工作。"
      ],
      skillsHeading: "技能",
      selectedProjectsHeading: "精选项目",
      allProjects: "查看全部项目",
      contactHeading: "联系方式",
      contact: {
        beforeEmail: "如果有机会或项目交流，可以发邮件到 ",
        afterEmail: "。你也可以在 ",
        github: "GitHub",
        afterGithub: " 找到我，或 ",
        cv: "下载我的简历",
        end: "。"
      }
    },
    projects: {
      title: "项目",
      heading: "项目",
      intro: "这里展示我在游戏系统、强化学习、计算机视觉、自动化和实时交互方向的精选工作。Magic Fan Made 被拆成两个相关案例：可玩的游戏系统，以及它的 PPO 决策智能体。",
      countSuffix: " 个精选项目"
    },
    cv: {
      title: "简历",
      heading: "简历",
      intro: "这是我的 HTML 简历摘要。完整排版版本可以下载 PDF。",
      experienceHeading: "经历",
      educationHeading: "教育",
      skillsHeading: "技能",
      selectedProjectsHeading: "精选项目"
    }
  }
};

const chineseProfile = {
  ...profile,
  role: "游戏开发者与 AI 程序员",
  location: "英国曼彻斯特",
  note: "曼彻斯特大学计算机科学本科生。"
};

const englishProfile = {
  ...profile,
  note: "BSc Computer Science student at the University of Manchester."
};

const chineseSkills = [
  { group: "编程语言", items: ["Python", "JavaScript", "C#", "HTML5 Canvas", "CSS"] },
  { group: "游戏开发", items: ["Unity", "Unreal", "Pygame", "OpenGL", "Canvas 2D", "WebSocket", "Netcode"] },
  { group: "后端与数据", items: ["FastAPI", "AsyncIO", "SQLAlchemy", "MySQL", "MongoDB"] },
  { group: "AI 与机器学习", items: ["PyTorch", "Reinforcement Learning", "PPO", "DQN", "VAE-GAN", "Transformer", "DINOv3", "MMPose"] },
  { group: "系统能力", items: ["Multiprocessing", "Multithreading", "NumPy", "ctypes", "Docker", "Kubernetes"] },
  { group: "工具", items: ["Git", "Vim", "Jenkins", "Unreal Engine", "Alibaba Cloud", "Kasm"] }
];

const chineseExperience = [
  {
    role: "AI 程序员实习生",
    organisation: "MuteGravity-Face Swap AI · 中国上海",
    period: "2025 年 6 月 - 2025 年 8 月",
    highlights: [
      "独立交付从真人视频到 MetaHuman 参数的面部表情参数转换流水线；项目被公司内部采用。",
      "使用 Pixel3DMM 法线图做光照增强，并优化 Unreal Engine 数据采集脚本，将采集速度从每张 2 秒提升到每秒 50 张。",
      "构建 VAE-GAN 转换模型，并结合 DINOv3 特征和时序 Transformer，生成稳定、无抖动的面部参数。"
    ]
  },
  {
    role: "测试工程实习生",
    organisation: "Iluvatar CoreX · 中国上海",
    period: "2024 年 7 月 - 2024 年 9 月",
    highlights: [
      "使用 Jenkins 开发 Auto Dump，自动化模型算子 dump 流程，减少跨系统切换和手动函数查找；效率提升超过 90%。",
      "使用 PyTorch 构建 DQN 和 PPO 模型，并获得 SSH、Docker、Kubernetes 和个人服务器部署经验。"
    ]
  },
  {
    role: "游戏开发者 · 双人团队",
    organisation: "曼彻斯特大学 Autumn Game Jam · 英国曼彻斯特",
    period: "2024 年 10 月",
    highlights: ["使用 Unity 构建 Stop Ghosting Me 并获得第二名，通过本地 Netcode 连接支持多窗口交互概念。"]
  }
];

const chineseEducation = [
  {
    degree: "BSc Computer Science（计算机科学）",
    school: "曼彻斯特大学",
    period: "2024 年 9 月 - 2027 年 12 月",
    details: "Year 1 平均分：80%；Year 2 平均分：80%。兴趣方向：强化学习、后端开发和游戏开发。"
  },
  {
    degree: "A-levels",
    school: "上海托马斯学校",
    period: "2021 年 7 月 - 2023 年 7 月",
    details: "数学 (A*)、进阶数学 (A*)、物理 (A*)、计算机科学 (A)。"
  }
];

const chineseProjectText = [
  {
    title: "Magic Fan Made — 游戏系统",
    period: "2024 年 1 月 - 至今",
    role: "全栈游戏开发者",
    status: "持续进行的个人项目",
    mediaDetail: "游戏系统 · 可添加玩法截图",
    thumbnail: {
      alt: "Magic Fan Made 组牌器玩法缩略图。"
    },
    summary: "一套浏览器卡牌游戏系统，覆盖收藏、组牌、Roguelike 进度、PvE、PvP 和玩家侧卡牌工坊。",
    description: "持续开发的个人游戏项目，代码超过 32,000 行。我负责玩法平台、实时客户端交互、后端服务和部署环境。",
    linkLabels: ["在线游戏网站", "GitHub"],
    mediaGallery: {
      title: "玩法功能展示",
      intro: "横向展示主要可玩系统，使用真实项目短视频，方便访问者快速浏览不同功能。",
      items: [
        {
          title: "抽卡",
          description: "打开补充包并展示卡牌，作为卡牌收集循环的一部分。"
        },
        {
          title: "组牌器",
          description: "围绕不同策略和卡牌组合创建、调整牌组。"
        },
        {
          title: "卡牌工坊",
          description: "通过玩家侧卡牌工坊创建和编辑 DIY 卡牌。"
        },
        {
          title: "Roguelike 模式",
          description: "在 Roguelike 遭遇中推进流程，并逐步构建一次 run。"
        },
        {
          title: "AI 对战",
          description: "通过实时卡牌战斗系统与 AI 对手进行对战。"
        },
        {
          title: "PvP 对战",
          description: "基于 WebSocket 后端服务实现实时玩家对战交互。"
        },
        {
          title: "战斗回放",
          description: "通过回放页面和时间线控制查看已完成的对局。"
        }
      ]
    },
    sections: [
      { title: "项目概览", paragraphs: ["Magic Fan Made 是一个接近完整的浏览器卡牌游戏系统。它包含任务、商店、抽卡、组牌、创意工坊、Roguelike 爬塔、PvE 和 PvP 模式。", "这一页聚焦可玩的游戏平台。PPO 决策智能体会在 Magic Fan Made — 游戏 AI 案例中单独展示。"] },
      { title: "游戏系统", paragraphs: ["核心玩法结合了收藏、组牌、任务、商店交互、抽卡、Roguelike 进度，以及 PvE 和 PvP 对战。", "FastAPI 后端服务实现异步功能、抽卡逻辑和 stack 机制。"] },
      { title: "客户端体验", paragraphs: ["客户端使用 JavaScript 和 Canvas 2D 构建。基于 WebSocket 的实时交互把浏览器客户端连接到游戏服务。", "项目使用矩阵变换和动作队列实现伪 3D 效果与平滑动画。"] },
      { title: "创意工坊", paragraphs: ["玩家可以通过创意工坊创建 DIY 卡牌。项目使用 RestrictedPython 支持这一创作流程。"] },
      { title: "部署与开发", paragraphs: ["我创建了 Docker 服务器镜像，并部署到阿里云。同时我构建了 Docker 和 Kasm 开发环境镜像，让项目更容易开发和访问。"] },
      { title: "我的贡献", paragraphs: ["这是我的个人项目。我开发了前端和后端，设计并实现游戏系统，构建实时交互层，并创建开发与部署环境。"] },
      { title: "结果", paragraphs: ["项目已经发展成一个拥有超过 32,000 行代码、多个可玩模式的游戏系统。GitHub 仓库 README 中包含演示视频。"] }
    ]
  },
  {
    title: "Magic Fan Made — 游戏 AI",
    period: "2024 年 1 月 - 至今",
    role: "AI 游戏程序员",
    status: "持续进行的个人项目",
    mediaDetail: "PPO 游戏智能体 · 可添加对局或训练画面",
    thumbnail: {
      alt: "Magic Fan Made AI 对战演示缩略图。"
    },
    summary: "一个集成进卡牌游戏的 PPO 强化学习智能体，可以像玩家一样做出出牌决策。",
    description: "AI 是 Magic Fan Made 的独立部分：它负责真实游戏中的出牌决策，而不是脚本敌人或聊天接口。",
    linkLabels: ["GitHub"],
    mediaGallery: {
      title: "AI 对战演示",
      intro: "展示真实游戏环境中的 AI 对战录像。",
      items: [
        {
          title: "AI 对战演示",
          description: "展示 AI 对手在卡牌战斗系统中做决策的实机录像。"
        }
      ]
    },
    sections: [
      { title: "项目概览", paragraphs: ["这是 Magic Fan Made 的 AI 组件。我把 PPO 强化学习智能体集成到卡牌玩法中，使它可以在真实游戏环境里做决策和出牌。", "智能体与可玩的游戏平台分开设计，但会连接到同一套卡牌战斗系统中作为对手，而不是固定脚本 bot。"] },
      {
        title: "状态表示",
        paragraphs: ["模型状态由手牌、战场、资源和历史信息组成，让 policy 同时看到即时出牌条件和回合上下文。"],
        bullets: [
          "Hand：用 mana cost、type、color 和 feature 字段表示手牌。",
          "Battlefield：包含英雄血量、mana，以及 creature 的 attack、defense 和 status。",
          "History：按回合记录过去打出的牌。",
          "Card features：mana cost、type、color，以及 creature 专属的 attack / defense。"
        ]
      },
      {
        title: "动作空间",
        paragraphs: ["动作空间覆盖回合控制、攻击 / 阻挡选择，以及 40 张牌牌组中所有打牌目标模式。"],
        bullets: [
          "0：结束回合。",
          "1：结束 bullet time。",
          "2-11：选择 10 个 creature 槽位之一进行攻击。",
          "12-21：选择 10 个 creature 槽位之一进行阻挡。",
          "22-1341：40 张牌的打牌动作，每张牌对应 33 种目标选项。",
          "每张牌的目标选项包括：无目标、敌方 creature 0-9、己方 creature 0-9、敌方英雄、己方英雄，以及选择一张牌 0-9。"
        ]
      },
      {
        title: "Reward 设计",
        paragraphs: ["核心 reward 思路是使用状态价值差：r_t = V(s_{t+1}) - V(s_t)。", "状态价值函数综合战场优势、血量差、mana 资源和手牌资源：V(s) = Board + Health + Mana + Hand。"],
        bullets: [
          "Board：生物优势和场面压力。",
          "Health：玩家与对手的血量差。",
          "Mana：可用资源优势。",
          "Hand：剩余手牌资源优势。"
        ]
      },
      {
        title: "稳定化",
        paragraphs: ["Reward 信号做了裁剪，并把终局结果单独处理，避免单步 reward 盖过最终胜负。"],
        bullets: [
          "Step reward 裁剪到 [-0.3, 0.3]。",
          "Terminal reward：胜利 = +1，失败 = -1。",
          "在游戏客户端加入 reward 可视化，用来检查 agent 动作发生时各组件如何变化。"
        ],
        media: [
          {
            id: "reward-visualization",
            title: "Reward 可视化",
            description: "游戏内调试视图，展示 agent 动作发生时各 reward 组件的变化。",
            src: "images/magic-fan-made-ai/reward-visualization.jpg",
            alt: "AI 决策时带有 reward 组件数值叠加显示的游戏画面。"
          }
        ]
      },
      {
        title: "训练反馈",
        paragraphs: ["TensorBoard 记录了 global_reward、reward_train 和 success_rate。当前展示的训练曲线显示，在约 500k steps 内 reward 和 success rate 都有提升，并且 success_rate 相比训练初期稳定在更高水平。"],
        media: [
          {
            id: "tensorboard-training",
            title: "TensorBoard 训练曲线",
            description: "PPO 训练过程中的 global_reward、reward_train 和 success_rate 曲线。",
            src: "images/magic-fan-made-ai/tensorboard-training.jpg",
            alt: "TensorBoard 图表，显示训练过程中的 global reward、reward train 和 success rate。"
          }
        ]
      },
      { title: "结果", paragraphs: ["改进后的 AI 相比项目旧版本 AI 达到了超过 90% 的胜率。这个结果是与项目内部早期 AI 版本的对比，和页面上展示的单次训练 success_rate 曲线分开理解。"] },
      { title: "我的贡献", paragraphs: ["这是我的个人项目的一部分。我设计了状态编码、动作空间映射、reward 函数、reward 调试可视化和 PPO 集成，并把训练后的 agent 接入真实的 Magic Fan Made 战斗环境。"] }
    ]
  },
  {
    title: "MuteGravity — Face Swap AI",
    period: "2025 年 6 月 - 2025 年 8 月",
    role: "AI 程序员实习生",
    status: "实习项目 · 已被内部采用",
    mediaDetail: "最终面部转换效果 · 内部项目",
    thumbnail: {
      alt: "Face Swap AI 最终转换效果缩略图。"
    },
    summary: "一套面部转换与 MetaHuman 表情流水线，覆盖 Control Rig 转换、真人视频到 MetaHuman、数据增强和时序建模。",
    description: "在 AI 程序员实习期间，我独立开发了完整的表情参数转换项目，用于在真人视频、MetaHuman 面部结果和 Control Rig 数据之间转换。",
    linkLabels: ["X-NeMo Inference", "Pixel3DMM"],
    mediaGallery: {
      title: "最终效果",
      intro: "来自 face-swap 与 MetaHuman 转换流水线的最终输出演示。",
      items: [
        {
          title: "最终转换演示",
          description: "内部 face-swap AI 工作流的最终视觉效果。"
        }
      ]
    },
    sections: [
      { title: "项目概览", paragraphs: ["该项目面向公司内部面部动画流程，重点是面部表情转换。它连接真人视频、MetaHuman 输出和 Control Rig 数据，让表情信息可以在这些表示之间转换。", "实习结束后，项目被公司成功采用并应用到内部流程中。"] },
      {
        title: "模型 1 · Control Rig 与 MetaHuman 转换",
        paragraphs: ["第一个模型负责面部 Control Rig 数据和 MetaHuman 面部输出之间的双向转换。"],
        bullets: [
          "Control Rig 到 MetaHuman 面部的转换。",
          "MetaHuman 面部到 Control Rig 的转换。",
          "目标：让精确的面部控制数据可以进入 MetaHuman 渲染和动画流程。"
        ]
      },
      {
        title: "模型 2 · 真人与 MetaHuman 的共享隐空间",
        paragraphs: ["第二个模型负责把真人视频转换成 MetaHuman，也支持从 MetaHuman 转换回真人外观。它使用 encoder-decoder 结构和双头 decoder：encoder 把 MetaHuman 与真人面部映射到同一个 latent space，两个 decoder head 分别重建真人域和 MetaHuman 域。", "训练目标包含直接 reconstruction loss，以及 cycle-consistency reconstruction loss：先经过一个域转换，再经过另一个域转换回来，并对回环结果再次做重建约束。我也制作了 VAE 和 GAN 版本用于更高质量转换实验。"],
        bullets: [
          "共享 encoder：对齐真人和 MetaHuman 面部表示。",
          "双头 decoder：分别输出真人面部和 MetaHuman 面部。",
          "每个域使用直接 reconstruction loss。",
          "跨域往返使用 cycle-consistency reconstruction loss。",
          "制作 VAE 和 GAN 版本，探索更高质量的转换结果。"
        ]
      },
      {
        title: "模型 3 · 预训练视觉特征与时序建模",
        paragraphs: ["第三个模型使用预训练视觉特征和序列建模来提升视频转换稳定性。它使用 DINOv2、DINOv3，或来自 X-NeMo Inference 的更轻量 motion encoder，并结合 temporal Transformer 和 spatial Transformer。", "模型中使用 contrastive loss 来提升特征对齐效果，使跨帧和跨域的表示更稳定。"],
        bullets: [
          "使用 DINOv2、DINOv3 或 X-NeMo motion encoder 做特征提取。",
          "Temporal Transformer 用于帧间一致性。",
          "Spatial Transformer 用于面部区域特征建模。",
          "Contrastive loss 用于表示对齐。"
        ]
      },
      {
        title: "数据获取",
        paragraphs: ["我编写 Unreal Engine 脚本，把 Control Rig 数据导入 Unreal 并渲染高精度面部表情数据。这个流程可以自由控制灯光、相机角度和面部表情。"],
        bullets: [
          "将 Control Rig 数据导入 Unreal Engine。",
          "在可控灯光和角度下渲染精确的 MetaHuman 面部数据。",
          "使用可控面部参数生成表情数据。"
        ]
      },
      {
        title: "数据增强",
        paragraphs: ["对于真人面部增强，我使用 X-NeMo Inference 与 MetaHuman 生成更多真人训练数据。同时使用 Pixel3DMM 生成法线图，用于光照增强。"],
        bullets: [
          "使用 X-NeMo Inference 和 MetaHuman 生成扩展真人面部数据。",
          "使用 Pixel3DMM normal map 做光照增强。",
          "扩展训练数据在光照、角度和表情变化上的覆盖。"
        ]
      },
      { title: "性能提升", paragraphs: ["优化后的 Unreal Engine 数据采集流程从每张图像 2 秒提升到每秒 50 张图像。"] },
      { title: "我的贡献", paragraphs: ["我独立主导参数转换项目，包括 Unreal 数据采集、数据增强、模型设计、VAE / GAN 版本、预训练特征集成、时序与空间建模，以及最终效果验证。"] }
    ]
  },
  {
    title: "微调 2D 点检测模型",
    period: "2026 年 6 月 - 至今",
    role: "AI 程序员实习生",
    status: "MuteGravity 实习项目 · 进行中",
    mediaDetail: "可训练模型重建 · UE 合成数据流水线",
    thumbnail: {
      alt: "2D 点检测模型微调与 Unreal Engine 数据流水线缩略图。"
    },
    summary: "一个基于 SimCC 的 2D 点检测模型微调项目：解析已有 .pth 预测模型，倒推出可训练模型并验证正确性，同时构建 UE 渲染数据生成流程。",
    description: "这是我在 MuteGravity 担任 AI 程序员实习生期间参与的项目，结合 SimCC 模型重建、loss 设计和 Unreal Engine 合成数据生成，让一个原本只用于预测的 checkpoint 可以重新训练和验证。",
    linkLabels: ["XRFeitoria"],
    mediaGallery: {
      title: "流程概览",
      intro: "临时视觉图，用来概括模型重建、loss 设计，以及 BVH 到 FBX 再到 Unreal 渲染的数据流水线。",
      items: [
        {
          title: "2D 点检测流程",
          description: "临时项目封面，展示合成数据和模型微调工作流。",
          alt: "2D 点检测模型微调流程示意图。"
        }
      ]
    },
    sections: [
      { title: "项目概览", paragraphs: ["这是我从 2026 年 6 月开始在 MuteGravity 参与的实习项目，职位是 AI 程序员实习生。", "我拿到的是一个 .pth 格式的预测模型。模型使用 SimCC 形式做 2D 点检测，把坐标预测表示成分类式的坐标分布。核心任务是解析这个 checkpoint，倒推出可训练的模型结构，并验证重建后的可训练模型与原预测模型的一致性。", "完成模型重建后，我设计了微调目标，并将其接入通过 Unreal Engine 渲染生成的合成数据流程。"] },
      {
        title: "模型重建与验证",
        paragraphs: ["第一个技术难点是把只能预测的 checkpoint 还原成可以继续训练的模型。"],
        bullets: [
          "解析已有 .pth 模型，理解 layer 结构和参数布局。",
          "重建与 checkpoint 和 SimCC 输出格式兼容的可训练 PyTorch 模型。",
          "通过与原预测模型进行结果对比，验证重建模型的正确性。"
        ]
      },
      {
        title: "Loss 设计",
        paragraphs: ["模型使用 SimCC，把每个 2D 点表示成 1D 坐标分布。Loss 设计使用面向分布的监督，使模型可以学习 soft coordinate target，而不是只依赖硬标签。"],
        bullets: [
          "Soft Cross Entropy：这里的 soft target 使用 Student-t 分布构造，用于更鲁棒的坐标分布监督。",
          "Wasserstein1DLoss：用于约束预测点位置在 1D 分布上的距离。"
        ]
      },
      {
        title: "UE 渲染数据流水线",
        paragraphs: ["数据生成主要依赖 Unreal Engine 渲染流程，整体分为三步。"],
        bullets: [
          "第一步：将 BVH 动作文件转换成 FBX 文件。这里使用 MotionBuilder 做动画重定向，并做动画优化，减少身体或服装穿模。",
          "第二步：生成配置文件。每个渲染视频对应一批配置文件，配置中包含 FBX 动画、地图与角色放置位置、服装、Style3D 相关渲染配置、摄像机轨迹与旋转。",
          "第三步：执行 Python 脚本，通过 XRFeitoria 操作 Unreal Engine 渲染视频。渲染流程也使用了 Style3D；流程可以持续渲染，即使 Unreal 崩溃也可以重启并继续从已有状态渲染。"
        ]
      },
      {
        title: "采集数据",
        paragraphs: ["每次渲染会采集模型训练和验证所需要的信息。"],
        bullets: [
          "摄像机参数。",
          "3D 点数据。",
          "Skel hit 数据。",
          "视频帧。"
        ]
      },
      {
        title: "帧同步 Bug",
        paragraphs: ["数据采集过程中遇到一个比较严重的问题：3D 点数据和视频帧之间存在延迟，但这个延迟不是固定相差几帧的简单问题。", "根因是 Unreal / XRFeitoria 的采集时机不一致：3D 点数据是在每个 tick 获取，而视频帧是在每个渲染帧保存，两条时间线不能保证完全一致。", "我修改了 3D 点获取逻辑：每次渲染帧保存后，同时保存对应的 3D 点数据。这样 3D 标签就和视频帧在同一个渲染循环节点对齐。"]
      },
      { title: "我的贡献", paragraphs: ["我负责模型解析和可训练模型重建，设计 loss 组合，搭建 UE 渲染数据流程，并修复数据采集中视频帧与 3D 点数据不同步的问题。"] }
    ]
  },
  {
    title: "Auto Dump",
    period: "2024 年 7 月 - 2024 年 9 月",
    role: "测试工程实习生",
    status: "Iluvatar CoreX 实习项目",
    mediaDetail: "Jenkins 自动化 · 内部项目",
    thumbnail: {
      alt: "Auto Dump Jenkins 自动化项目缩略图。"
    },
    summary: "一个基于 Jenkins 的模型算子 dump 自动化工具，减少跨系统切换和手动函数查找。",
    description: "该项目在测试工程实习期间完成，用于自动化公司内部重复的算子 dump 流程。",
    sections: [
      { title: "项目概览", paragraphs: ["Auto Dump 是我在 Iluvatar CoreX 测试工程实习期间使用 Jenkins 开发的模型算子 dump 自动化项目。"] },
      { title: "问题", paragraphs: ["原有流程需要跨系统切换和手动查找函数。项目目标是减少这些重复的手动步骤。"] },
      { title: "解决方案", paragraphs: ["我独立使用 Jenkins 开发自动化项目，让 dump 流程可以在不进行手动查找和系统切换的情况下运行。"] },
      { title: "结果", paragraphs: ["根据实习项目结果，该流程效率提升超过 90%。"] },
      { title: "相关工程工作", paragraphs: ["同一段实习中，我获得了 SSH 远程连接、Docker 和 Kubernetes 的实践经验，包括创建 Docker 镜像并部署到个人服务器。"] }
    ]
  },
  {
    title: "Stop Ghosting Me",
    period: "2024 年 10 月",
    role: "游戏开发者 · 双人团队",
    status: "曼彻斯特大学 Autumn Game Jam · 第二名",
    mediaDetail: "Unity Game Jam 项目 · 玩法演示",
    thumbnail: {
      alt: "Stop Ghosting Me 玩法演示缩略图。"
    },
    summary: "一个围绕本地多窗口交互构建的 Unity Game Jam 游戏，在曼彻斯特大学 Autumn Game Jam 中获得第二名。",
    description: "该项目由双人团队在 Game Jam 期间完成，探索了由多个本地游戏窗口支持的交互概念。",
    linkLabels: ["GitHub"],
    mediaGallery: {
      title: "玩法演示",
      intro: "展示本地多窗口交互概念的短视频。",
      items: [
        {
          title: "Stop Ghosting Me 演示",
          description: "Unity 玩法演示，展示多窗口交互和本地 Netcode 连接概念。"
        }
      ]
    },
    sections: [
      { title: "项目概览", paragraphs: ["Stop Ghosting Me 由双人团队在 2024 年曼彻斯特大学 Autumn Game Jam 期间开发，并在比赛中获得第二名。"] },
      { title: "游戏概念", paragraphs: ["游戏把多窗口交互作为核心想法。项目使用 Netcode 建立本地连接来支持这种交互模型。"] },
      { title: "我的贡献", paragraphs: ["我作为双人团队成员使用 Unity 开发游戏，并参与实现本地联网和多窗口交互概念。"] },
      { title: "结果", paragraphs: ["项目获得比赛第二名，多窗口交互被认为是游戏中有创新性的部分。"] }
    ]
  },
  {
    title: "烟花模拟器",
    period: "2023 年 7 月 - 2023 年 8 月",
    role: "个人项目",
    status: "已完成",
    mediaDetail: "基于矩阵的 OpenGL 粒子模拟",
    thumbnail: {
      alt: "烟花模拟器粒子渲染缩略图。"
    },
    summary: "一个 OpenGL 烟花模拟器，使用超大固定 size 的 NumPy matrix 维护粒子状态，并通过 VBO 渲染烟花粒子。",
    description: "个人模拟项目，把粒子运动表示成对大型固定 NumPy matrix 的算术更新，再通过 OpenGL VBO 高效渲染。",
    linkLabels: ["GitHub"],
    mediaGallery: {
      title: "模拟器演示",
      intro: "展示烟花模拟器输出效果的短视频。",
      items: [
        {
          title: "烟花模拟效果",
          description: "由矩阵化运动更新驱动的 OpenGL 烟花粒子效果。"
        }
      ]
    },
    sections: [
      { title: "项目概览", paragraphs: ["烟花模拟器是一个个人 OpenGL 项目，用于模拟烟花粒子、运动轨迹、爆炸扩散和视觉效果。"] },
      { title: "基于矩阵的模拟", paragraphs: ["核心技术设计是维护一个超大固定 size 的 NumPy matrix 作为粒子状态容器。每一次模拟步都会对这个 matrix 做算术操作，更新粒子位置、速度、生命周期和视觉状态。", "这样可以让模拟数据保持紧凑，并让运动更新逻辑更直接。"] },
      { title: "粒子渲染", paragraphs: ["烟花粒子使用 OpenGL VBO 渲染。粒子状态从 NumPy matrix 中组织后发送到 GPU 渲染，减少逐粒子 Python 侧开销。"] },
      { title: "运动与视觉", paragraphs: ["我使用数学和力学计算模拟烟花轨迹、爆炸扩散和多种视觉形状。"] },
      { title: "我的贡献", paragraphs: ["这是我的个人项目。我设计了基于矩阵的粒子状态系统，实现了算术更新循环，并构建了烟花粒子的 VBO 渲染路径。"] }
    ]
  },
  {
    title: "TheDayOfSagittarius3",
    period: "2022 年 4 月 - 2022 年 6 月",
    role: "个人项目",
    status: "已完成",
    mediaDetail: "Pygame 网络项目 · Bilibili 演示",
    thumbnail: {
      alt: "TheDayOfSagittarius3 Pygame 网络项目缩略图。"
    },
    summary: "一个 Python 与 Pygame 游戏核心，将游戏逻辑与网络通信分离，并把高计算量工作移入 C++ 动态库。",
    description: "个人游戏项目，聚焦响应式联网、并发和性能敏感计算。",
    linkLabels: ["GitHub", "Bilibili 演示"],
    mediaGallery: {
      title: "玩法演示",
      intro: "嵌入的 Bilibili 演示视频，用于展示这个 Pygame 网络项目。",
      items: [
        {
          title: "TheDayOfSagittarius3 演示",
          description: "展示项目效果的 Bilibili 外部视频。"
        }
      ]
    },
    sections: [
      { title: "项目概览", paragraphs: ["TheDayOfSagittarius3 是一个使用 Python 和 Pygame 构建的个人游戏项目。"] },
      { title: "游戏与网络架构", paragraphs: ["Multiprocessing 将游戏逻辑和网络通信分离，以提高稳定性和响应性。", "AsyncIO 处理异步 socket 通信，用于实时数据传输。"] },
      { title: "性能工作", paragraphs: ["我通过 ctypes 和 numpy.ctypeslib 连接 C++ 动态库处理高计算量任务，实现了 20 倍性能提升。", "我还使用 ctypes 和多线程绕过 Python GIL，进一步提升性能。"] }
    ]
  }
];

const localizeMediaGallery = (baseGallery, localizedGallery) => {
  if (!baseGallery) return localizedGallery;
  if (!localizedGallery) return baseGallery;

  return {
    ...baseGallery,
    ...localizedGallery,
    items: baseGallery.items.map((item, index) => ({
      ...item,
      ...localizedGallery.items?.[index]
    }))
  };
};

const localizeProjects = (baseProjects, localizedProjects) => baseProjects.map((project, index) => {
  const localizedProject = localizedProjects[index];

  return {
    ...project,
    ...localizedProject,
    technologies: project.technologies,
    mediaLabel: project.mediaLabel,
    thumbnail: {
      ...project.thumbnail,
      ...localizedProject.thumbnail
    },
    mediaGallery: localizeMediaGallery(project.mediaGallery, localizedProject.mediaGallery),
    links: project.links.map((link, linkIndex) => ({
      ...link,
      label: localizedProject.linkLabels?.[linkIndex] ?? link.label
    }))
  };
});

const chineseProjects = localizeProjects(projects, chineseProjectText);

export const portfolio = {
  en: {
    profile: englishProfile,
    cvUrl,
    skills,
    experience,
    education,
    projects,
    selectedProjects,
    ui: englishUi
  },
  zh: {
    profile: chineseProfile,
    cvUrl,
    skills: chineseSkills,
    experience: chineseExperience,
    education: chineseEducation,
    projects: chineseProjects,
    selectedProjects: chineseProjects.slice(0, 3),
    ui: chineseUi
  }
};
