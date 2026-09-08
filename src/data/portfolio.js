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
  { group: "AI & ML", items: ["PyTorch", "Reinforcement Learning", "PPO", "DQN", "CVAE", "VAE-GAN", "Transformer", "DINOv3", "MMPose"] },
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
    slug: "generalizable-card-game-ai",
    title: "Generalizable Card Game AI",
    period: "Jul. 2026 - Present",
    role: "Research Engineer · Personal Project",
    status: "Stage 1 implemented · Stage 2 proposed",
    mediaLabel: "Generalizable Card Game AI",
    mediaDetail: "Stage 1 architecture · four major model iterations",
    inlineMedia: true,
    thumbnail: {
      src: "images/project-thumbnails/GeneralizableCardGameAI.png",
      alt: "Research cover for Generalizable Card Game AI, showing an action-vector pretraining stage and a planned large-action-space SAC stage."
    },
    summary: "A two-stage research framework for a card-game agent that can reason about diverse cards rather than being tied to a fixed card catalogue.",
    description: "Stage 1 is an action-conditioned state-transition model developed through four major architecture iterations. The Stage 2 large-action-space SAC policy remains a research proposal.",
    technologies: ["Python", "PyTorch", "CVAE", "Transformer", "Action Embeddings", "Hungarian Matching", "SAC (planned)"],
    links: [
      { label: "Entropy 24(10), 1441", href: "https://www.mdpi.com/1099-4300/24/10/1441" },
      { label: "Reference · arXiv:2206.12700", href: "https://arxiv.org/abs/2206.12700" },
      { label: "Large Discrete Actions · arXiv:1512.07679", href: "https://arxiv.org/abs/1512.07679" }
    ],
    sections: [
      {
        title: "Research Goal",
        paragraphs: [
          "Most card-game agents are built around a closed, fixed card set, which couples their action space tightly to known card identities. This project explores a different direction: learning action and state-transition representations that can describe varied card effects and game situations.",
          "The aim is not to claim generalisation before it has been evaluated, but to build the representation layer needed for a policy that can transfer beyond a single fixed card catalogue. The project began in July 2026."
        ]
      },
      {
        title: "Two-Stage Training Plan",
        paragraphs: [
          "The project is deliberately separated into representation learning and decision learning. This avoids asking a reinforcement-learning policy to discover a useful action geometry from scratch in a large, compositional card-game action space."
        ],
        bullets: [
          "Stage 1 — implemented: pretrain compact, action-conditioned transition representations with an autoencoding objective.",
          "Stage 2 — proposed: combine the Stage 1 representation with a large-action-space reinforcement-learning framework and Soft Actor-Critic (SAC) to train the gameplay policy.",
          "Only Stage 1 is presented as an implemented result on this page; Stage 2 is a documented research design, not a completed training result."
        ]
      },
      {
        title: "Stage 1 · Action-Conditioned Transition Model",
        paragraphs: [
          "The final Stage 1 implementation is a conditional variational autoencoder (CVAE) for structured, single-step card-game state transitions. It receives global game state, entities across nine game zones, card text and structured card attributes, the current action from 362 action classes, the played card, and Stack metadata.",
          "Jina text embeddings encode card descriptions, while CardStateEncoder represents structured attributes such as type, mana cost, colour identity, keywords, combat values, tapped state, and base creature statistics. Residual CardFusion combines these signals, EntityStateTransformerEncoder models entities jointly across zones, and a TransitionPlanner exposes intermediate transition structure before decoding."
        ],
        bullets: [
          "TransitionPlanner produces four interpretable plan tokens before decoding the next state.",
          "Prior and posterior encoders learn latent transition paths for inference and training respectively.",
          "The decoder predicts global-state changes, existing-entity destinations and attributes, and up to ten source-unknown birth entities."
        ],
        media: [{
          id: "generalizable-card-game-ai-stage-1-architecture",
          title: "Final Stage 1 State-Transition Architecture",
          description: "The final plan-conditioned CVAE architecture: shared feature encoders, entity-aware transition encoding, four plan tokens, and structured existing-entity / birth-entity decoding.",
          src: "images/generalizable-card-game-ai/end-to-end-game-state-transition.svg",
          alt: "End-to-end structured game-state transition model architecture for the final Stage 1 card-game AI.",
          kind: "image"
        }]
      },
      {
        title: "Structured Synthesis and Entity Birth",
        paragraphs: [
          "Here, synthesis means reconstructing, predicting, and visualising structured game-state transitions—not image generation. The model predicts where existing cards move, how their attributes change, and whether an action introduces previously unseen entities such as summons or resolving spells.",
          "For source-unknown entities, ten birth queries predict existence, destination zone, type, cost, combat statistics, and battle state. Hungarian matching aligns predicted birth slots with the entities observed in the target state without requiring a specific card ID to be generated directly."
        ]
      },
      {
        title: "Training-Score Trajectory",
        paragraphs: [
          "The original TensorBoard comparison of the four reconstruction/score runs. This is a training-history screenshot, not a held-out evaluation."
        ],
        media: [{
          id: "generalizable-card-game-ai-reconstruction-score",
          title: "reconstruction/score Across the Four Major Versions",
          description: "Original TensorBoard capture. The planned entity-birth model is shown in pink; higher is better: reconstruction/score = 1 / (1 + reconstruction loss).",
          src: "images/generalizable-card-game-ai/reconstruction-score-tensorboard.png",
          alt: "TensorBoard reconstruction score comparison across four major card-game AI versions.",
          kind: "image"
        }]
      },
      {
        title: "Synthesis Visualisations",
        paragraphs: [
          "These interactive diagnostic views use the same 1,000 samples from specific_entity_birth_plan_zero_message_v01 at step 148,000. Read them in order: Reconstruction compares current state → Prior-predicted next state → true next state; Transition Plan asks how the action intends to change the state; Transition Space asks what next-state outcome structure the Prior considers plausible. The two PCA projections are computed independently, so their coordinates are not directly comparable. They are diagnostic evidence, not held-out evaluation."
        ],
        media: [
          {
            id: "generalizable-card-game-ai-reconstruction-viewer",
            title: "Reconstruction",
            description: "Select any of the 20 highlighted samples to compare the exact viewer export: current state → Prior-predicted next state → true next state. Each state panel keeps every zone and entity available in its own scrollable view, alongside the action, full card effect and reconstruction score.",
            kind: "synthesis-canvas",
            view: "reconstruction"
          },
          {
            id: "generalizable-card-game-ai-transition-plan-viewer",
            title: "Transition Plan",
            description: "All 1,000 deterministic 4-token plan vectors (mean-pooled before PCA). This is the model's explicit intermediate plan—how it interprets the action and card effect before decoding a next state. Removal, graveyard operations and different summon / discard mechanisms separate because they imply different transition paths. Click a point to inspect its action, full card description and observed transition.",
            kind: "synthesis-canvas",
            view: "transition-plan"
          },
          {
            id: "generalizable-card-game-ai-transition-space-viewer",
            title: "Transition Space",
            description: "All 1,000 Prior-inference transition vectors. This is the model's possible-outcome representation before seeing the true next state. The central overlap is expected because several effects share similar end-state outcomes; combat damage and random / search-based entity generation remain broader because their result is uncertain. Click a point to inspect its action, full card description and observed transition.",
            kind: "synthesis-canvas",
            view: "transition-space"
          }
        ]
      },
      {
        title: "Four Major Architecture Iterations",
        paragraphs: [
          "The model evolved through four major versions, each addressing a limitation exposed by the previous transition representation. The score below is reconstruction/score = 1 / (1 + reconstruction loss); higher is better."
        ],
        bullets: [
          "specific_v01 — Established the CVAE baseline for global state and fixed-slot multi-zone reconstruction. It lacked explicit source-entity alignment and could not represent source-unknown new entities. Best stable 20-record score: 0.2502.",
          "specific_entity_birth_v01 — Added EntityStateTransformer, existing-entity alignment, ten birth slots, and Hungarian matching. This made cross-zone movement and source-unknown entity generation explicit. Best stable score: 0.6179 (+147.0% vs. baseline).",
          "specific_entity_birth_v02 — Added Residual CardFusion and deepened the birth decoder from two to five layers to improve card-semantic fusion and new-entity attribute decoding. Best stable score: 0.6992 (+13.2% vs. birth_v01).",
          "specific_entity_birth_plan_wolpertinger_v01 — Added a four-token TransitionPlanner and plan-conditioned decoder to make action-to-state-change structure explicit, alongside binding augmentation for varied card-effect descriptions. Best stable score: 0.8717 (+24.7% vs. birth_v02; +248.4% observed vs. baseline)."
        ]
      },
      {
        title: "Metric Scope",
        paragraphs: [
          "Each figure is the best contiguous 20-training-record rolling average found in the corresponding training log, rather than a single high-variance batch. It communicates the best sustained reconstruction level reached during training."
        ],
        bullets: [
          "Data source: /mnt/data/trainData/checkpoints/logs; metric tag: reconstruction/score.",
          "The baseline and entity-birth architectures do not contain identical reconstruction-loss terms. Cross-architecture gains are therefore training-log observations, not a same-test-set benchmark.",
          "The birth_v01 → birth_v02 → plan_v01 sequence is the most directly comparable evidence of continuous architectural improvement."
        ]
      },
      {
        title: "Key References",
        paragraphs: [
          "The linked references above include Entropy 24(10), 1441, the work at arXiv:2206.12700, and Deep Reinforcement Learning in Large Discrete Action Spaces at arXiv:1512.07679. They inform the project’s representation-learning and planned policy-learning directions."
        ]
      }
    ]
  },
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
      { title: "Results", paragraphs: ["The improved AI achieved over a 60% win rate against previous strong AI versions. This result is a comparison with earlier versions of the project's own AI, separate from the TensorBoard success-rate curve shown for a training run."] },
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
    title: "Video-based 3D Human Pose Estimation",
    period: "Jun. 2026 - Present",
    role: "AI Programmer Intern",
    status: "MuteGravity internship project · ongoing",
    mediaLabel: "Video-based 3D Pose Estimation",
    mediaDetail: "Synthetic data · 2D keypoints · image-aware 3D reconstruction",
    inlineMedia: true,
    thumbnail: {
      src: "images/project-thumbnails/finetune-2d-point-detection.png",
      alt: "Video-based 3D human pose estimation and Unreal Engine synthetic-data pipeline thumbnail."
    },
    summary: "From 2D Keypoint Prediction and Image Features to 3D Pose Reconstruction — a two-stage video-based 3D human pose estimation pipeline spanning MetaHuman synthetic-data production, SimCC-based 2D keypoint fine-tuning, and image-aware reconstruction with a modified MixSTE model.",
    description: "Built during an AI programmer internship at MuteGravity, this project turns rendered MetaHuman video into aligned 2D and 3D supervision, then combines 2D joint tokens with pretrained ViT image features to reconstruct 3D pose from video.",
    technologies: ["Python", "PyTorch", "Unreal Engine", "MetaHuman", "Style3D", "MotionBuilder", "BVH", "FBX", "Animation Retargeting", "XRFeitoria", "SimCC", "Vision Transformer (ViT)", "MixSTE", "Cross-Attention", "3D Human Pose Estimation", "Wine", "Linux", "Virtual Display", "Containerised Deployment", "Soft Cross Entropy", "Student-t Soft Targets", "Wasserstein1DLoss"],
    links: [
      { label: "XRFeitoria", href: "https://github.com/openxrlab/xrfeitoria" },
      { label: "MixSTE", href: "https://github.com/JinluZhang1126/MixSTE" }
    ],
    mediaGallery: {
      title: "Pipeline Evidence and Results",
      intro: "The cover image and four project recordings show the aligned rendering labels, 2D fine-tuning comparison, image-aware 3D reconstruction, and Linux containerised rendering service.",
      items: [
        {
          id: "video-based-3d-pose-cover",
          title: "Two-Stage Pipeline",
          description: "A visual overview of the synthetic-data, 2D keypoint, and 3D reconstruction workflow.",
          src: "images/project-thumbnails/finetune-2d-point-detection.png",
          alt: "Visual overview of the video-based 3D human pose estimation pipeline.",
          kind: "image"
        },
        {
          id: "rendered-2d-keypoint-projection",
          title: "Aligned Rendered 2D Keypoints",
          description: "2D keypoints projected from MetaHuman 3D data after fixing the frame and label synchronisation delay.",
          src: "videos/video-based-3d-human-pose-estimation/rendered-2d-keypoint-projection.mp4",
          poster: "videos/video-based-3d-human-pose-estimation/rendered-2d-keypoint-projection.jpg",
          type: "video/mp4"
        },
        {
          id: "finetuned-2d-keypoint-comparison",
          title: "Fine-tuned 2D Keypoint Comparison",
          description: "A representative comparison of the source video, original prediction, fine-tuned prediction, and their overlay. The base model was already strong, so the visual difference is subtle.",
          src: "videos/video-based-3d-human-pose-estimation/finetuned-2d-keypoint-comparison.mp4",
          poster: "videos/video-based-3d-human-pose-estimation/finetuned-2d-keypoint-comparison.jpg",
          type: "video/mp4"
        },
        {
          id: "image-aware-3d-pose-reconstruction",
          title: "Image-aware 2D-to-3D Pose Reconstruction",
          description: "A 3D pose prediction produced by the model trained from scratch with both 2D joints and image features.",
          src: "videos/video-based-3d-human-pose-estimation/image-aware-3d-pose-reconstruction.mp4",
          poster: "videos/video-based-3d-human-pose-estimation/image-aware-3d-pose-reconstruction.jpg",
          type: "video/mp4"
        },
        {
          id: "linux-container-rendering-service",
          title: "Linux Container Rendering Service",
          description: "A browser-based monitoring view of Unreal Engine rendering in the reusable Linux container. The UI is optional and is removed for production rendering.",
          src: "videos/video-based-3d-human-pose-estimation/linux-container-rendering-service.mp4",
          poster: "videos/video-based-3d-human-pose-estimation/linux-container-rendering-service.jpg",
          type: "video/mp4"
        }
      ]
    },
    sections: [
      {
        title: "Project Overview",
        paragraphs: ["This ongoing MuteGravity internship project is a two-stage video-based 3D human pose estimation pipeline. Fine-tuning the 2D keypoint detector is the first stage; image-aware 3D reconstruction is the second.", "The workflow produces controllable MetaHuman video and aligned annotations in Unreal Engine, fine-tunes a 2D keypoint predictor on the generated data, and reconstructs 3D pose by combining 2D joint predictions with pretrained image features."],
        media: [{
          id: "video-based-3d-pose-cover",
          title: "Two-Stage Pipeline",
          description: "A visual overview of the synthetic-data, 2D keypoint, and 3D reconstruction workflow.",
          src: "images/project-thumbnails/finetune-2d-point-detection.png",
          alt: "Visual overview of the video-based 3D human pose estimation pipeline.",
          kind: "image"
        }]
      },
      {
        title: "MetaHuman Data Production",
        paragraphs: ["I built the Unreal Engine rendering workflow that produces the supervision required by both model stages. Motion assets are retargeted to MetaHuman characters and then cleaned to reduce visible hand-to-body and other mesh intersections before rendering."],
        bullets: [
          "Converted BVH motion files to FBX and used MotionBuilder for animation retargeting.",
          "Generated rendering configurations for animation, character and scene placement, clothing, Style3D-related setup, camera trajectory, and camera rotation.",
          "Used Python and XRFeitoria to run Unreal Engine rendering continuously, recover after crashes, and resume from existing progress.",
          "Collected rendered frames, camera information, MetaHuman 3D point data, skel-hit data, and projected 2D keypoints."
        ]
      },
      {
        title: "Frame-Level Label Synchronisation",
        paragraphs: ["The initial collection flow had a major alignment bug: 3D point data was delayed relative to the video, but not by a fixed number of frames. The cause was a timing mismatch: 3D points were collected on Unreal Engine ticks, while video frames were written on rendered frames.", "I changed the collection logic so that the matching 3D point data is saved immediately after each rendered frame. This aligns the rendered frame, its 3D pose, and its 2D camera projection at the same point in the render loop. The recording below shows the resulting high-accuracy 2D labels."],
        media: [{
          id: "rendered-2d-keypoint-projection",
          title: "Aligned Rendered 2D Keypoints",
          description: "2D keypoints projected from MetaHuman 3D data after fixing the frame and label synchronisation delay.",
          src: "videos/video-based-3d-human-pose-estimation/rendered-2d-keypoint-projection.mp4",
          poster: "videos/video-based-3d-human-pose-estimation/rendered-2d-keypoint-projection.jpg",
          type: "video/mp4"
        }]
      },
      {
        title: "2D Keypoint Model Reconstruction and Fine-tuning",
        paragraphs: ["I received a prediction-only .pth checkpoint using SimCC-style coordinate classification. I parsed its layer and parameter structure, reconstructed a compatible trainable PyTorch model, and verified that the reconstructed model matched the original prediction behaviour.", "The original model was already strong, so fine-tuning produced only subtle visible changes. Its value was to adapt the detector to the rendered data distribution and make it a reliable 2D input stage for 3D reconstruction."],
        bullets: [
          "Used Soft Cross Entropy with Student's t-distribution soft targets for distribution-aware coordinate supervision.",
          "Used Wasserstein1DLoss to constrain the 1D distribution distance of predicted point locations.",
          "Compared the source video, original prediction, fine-tuned prediction, and their overlay in the recording below."
        ],
        media: [{
          id: "finetuned-2d-keypoint-comparison",
          title: "Fine-tuned 2D Keypoint Comparison",
          description: "A representative comparison of the source video, original prediction, fine-tuned prediction, and their overlay. The base model was already strong, so the visual difference is subtle.",
          src: "videos/video-based-3d-human-pose-estimation/finetuned-2d-keypoint-comparison.mp4",
          poster: "videos/video-based-3d-human-pose-estimation/finetuned-2d-keypoint-comparison.jpg",
          type: "video/mp4"
        }]
      },
      {
        title: "Image-aware 3D Pose Reconstruction",
        paragraphs: ["A 2D-only pose-lifting model has an inherent depth ambiguity: similar 2D joint layouts can represent different 3D poses, such as a hand positioned in front of or behind the body. To address this, I trained the 2D-to-3D model from scratch and added pretrained ViT image features to the 2D joint input.", "The model is based on a modified MixSTE architecture. Each skeletal joint is represented as a token, and the input and output preserve the same number of joints. The network first applies a Spatial Transformer within each frame, then a Cross-Attention Transformer that fuses ViT image features with the joint-token representation, and finally a Temporal Transformer that models motion across frames before outputting a 3D coordinate for each joint."],
        bullets: [
          "Input: 2D joint tokens and pretrained ViT image features.",
          "Spatial Transformer → Cross-Attention Transformer → Temporal Transformer.",
          "Output: one 3D coordinate for every corresponding input joint.",
          "Used a simplified Gravity View training formulation: the camera is treated as fixed, with only pitch and tilt predicted to decouple the view and learn a stable 3D body structure."
        ],
        media: [{
          id: "image-aware-3d-pose-reconstruction",
          title: "Image-aware 2D-to-3D Pose Reconstruction",
          description: "A 3D pose prediction produced by the model trained from scratch with both 2D joints and image features.",
          src: "videos/video-based-3d-human-pose-estimation/image-aware-3d-pose-reconstruction.mp4",
          poster: "videos/video-based-3d-human-pose-estimation/image-aware-3d-pose-reconstruction.jpg",
          type: "video/mp4"
        }]
      },
      {
        title: "Linux Containerised Unreal Engine Rendering",
        paragraphs: ["The existing rendering workflow was primarily Windows-based, particularly because of Style3D-related constraints. Deploying it as an automated Linux service was difficult because Unreal Engine's rendering process depends on a graphical display environment. A previous attempt to move the service to Linux had therefore not progressed.", "I independently researched and tested a deployment solution outside my regular work tasks. I ran the Windows version of Unreal Engine through Wine with a virtual display environment, allowing it to execute rendering jobs on a Linux server. I then packaged the setup as a reusable container and exposed the rendering capability as a Web service. The browser UI shown in the recording below is an optional monitoring layer and is not needed for production rendering."],
        media: [{
          id: "linux-container-rendering-service",
          title: "Linux Container Rendering Service",
          description: "A browser-based monitoring view of Unreal Engine rendering in the reusable Linux container. The UI is optional and is removed for production rendering.",
          src: "videos/video-based-3d-human-pose-estimation/linux-container-rendering-service.mp4",
          poster: "videos/video-based-3d-human-pose-estimation/linux-container-rendering-service.jpg",
          type: "video/mp4"
        }]
      },
      { title: "My Contribution", paragraphs: ["I worked across the entire pipeline: Unreal Engine and MetaHuman data production, animation retargeting and cleanup, aligned 2D / 3D label collection, the frame synchronisation fix, 2D model reconstruction and fine-tuning, image-aware 2D-to-3D model design, and Linux containerised rendering-service deployment."] }
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
  playVideo: "Play video",
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
  playVideo: "播放视频",
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
  { group: "AI 与机器学习", items: ["PyTorch", "Reinforcement Learning", "PPO", "DQN", "CVAE", "VAE-GAN", "Transformer", "DINOv3", "MMPose"] },
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
    title: "通用化卡牌游戏 AI",
    period: "2026 年 7 月 - 至今",
    role: "研究工程师 · 个人项目",
    status: "第一阶段已实现 · 第二阶段为方案设计",
    mediaDetail: "第一阶段架构 · 四次重大模型迭代",
    thumbnail: {
      alt: "Generalizable Card Game AI 研究封面，展示动作向量预训练阶段与规划中的大型动作空间 SAC 阶段。"
    },
    summary: "一个两阶段研究框架，目标是让卡牌游戏智能体能够理解多样的卡牌，而不是绑定在固定的卡牌集合上。",
    description: "第一阶段是历经四次重大架构迭代的、由动作条件控制的状态转移模型；第二阶段的大型动作空间 SAC 策略仍处于研究设计阶段。",
    linkLabels: ["Entropy 24(10), 1441", "参考文献 · arXiv:2206.12700", "大型离散动作 · arXiv:1512.07679"],
    sections: [
      {
        title: "研究目标",
        paragraphs: [
          "多数卡牌游戏 AI 面向封闭且固定的卡牌集合构建，动作空间与已知卡牌 ID 紧密绑定。本项目探索另一条路径：学习可以描述多样卡牌效果和游戏状态的动作表示与状态转移表示。",
          "目标并不是在没有完成评估前宣称具备泛化能力，而是先构建一个能支撑策略跨越固定卡牌目录的表征层。项目于 2026 年 7 月开始。"
        ]
      },
      {
        title: "两阶段训练计划",
        paragraphs: ["项目将表征学习和决策学习分开进行，避免让强化学习策略直接在大型、组合式卡牌动作空间中从零学习出有意义的动作几何结构。"],
        bullets: [
          "阶段一——已实现：使用 autoencoding 目标预训练紧凑的、由动作条件控制的状态转移表示。",
          "阶段二——规划中：将阶段一表征与大型动作空间强化学习框架和 Soft Actor-Critic (SAC) 结合，训练游戏决策策略。",
          "本页仅将阶段一展示为已完成结果；阶段二是已写明的研究设计，而非完成的训练结果。"
        ]
      },
      {
        title: "阶段一 · 由动作条件控制的状态转移模型",
        paragraphs: [
          "最终实现是用于结构化、单步卡牌游戏状态转移的 Conditional Variational Autoencoder (CVAE)。输入包括全局游戏状态、九个游戏区域中的实体、卡牌文本及结构化属性、362 类当前动作、被使用的卡牌和 Stack 元数据。",
          "Jina 文本嵌入编码卡牌描述，CardStateEncoder 表示类型、费用、颜色身份、关键词、战斗数值、横置状态和生物基础属性等结构化信息。Residual CardFusion 融合这些信号，EntityStateTransformerEncoder 对各区域实体进行联合建模，TransitionPlanner 在解码前显式暴露中间转移结构。"
        ],
        bullets: [
          "TransitionPlanner 在解码下一状态前生成四个可解释的 plan token。",
          "Prior 与 Posterior encoder 分别学习推理和训练时的潜在状态转移路径。",
          "Decoder 预测全局状态变化、原有实体的去向与属性，以及最多十个来源未知的 birth entities。"
        ],
        media: [{
          id: "generalizable-card-game-ai-stage-1-architecture",
          title: "最终第一阶段状态转移架构",
          description: "最终的 plan-conditioned CVAE 架构：共享特征编码器、实体级转移编码、4 个 plan token，以及结构化的已有实体／新实体解码。",
          src: "images/generalizable-card-game-ai/end-to-end-game-state-transition.svg",
          alt: "Generalizable Card Game AI 最终第一阶段的端到端结构化游戏状态转移模型架构。",
          kind: "image"
        }]
      },
      {
        title: "结构化 Synthesis 与新实体生成",
        paragraphs: [
          "这里的 synthesis 指结构化游戏状态转移的重构、预测和可视化，并非图像生成。模型预测已有卡牌如何移动、属性如何变化，以及行动是否产生召唤物或结算法术等新的实体。",
          "针对来源未知的新实体，十个 birth query 预测其存在性、目标区域、类型、费用、战斗数值和战斗状态。Hungarian matching 将预测的 birth slot 与目标状态中观察到的实体对齐，而不需要直接生成具体卡牌 ID。"
        ]
      },
      {
        title: "训练分数轨迹",
        paragraphs: ["四个 reconstruction/score run 的原始 TensorBoard 对比截图。这是训练历史，不是 held-out evaluation。"],
        media: [{
          id: "generalizable-card-game-ai-reconstruction-score",
          title: "四次重大版本的 reconstruction/score",
          description: "原始 TensorBoard 截图：带 TransitionPlanner 的实体 birth 模型为粉色。数值越高越好：reconstruction/score = 1 / (1 + reconstruction loss)。",
          src: "images/generalizable-card-game-ai/reconstruction-score-tensorboard.png",
          alt: "四个主要版本的 TensorBoard reconstruction score 对比。",
          kind: "image"
        }]
      },
      {
        title: "Synthesis 可视化",
        paragraphs: ["下列交互式诊断图来自 specific_entity_birth_plan_zero_message_v01 的 step 148,000，使用同一批完整的 1,000 个样本。建议按顺序阅读：Reconstruction 对比 Current state → Prior-predicted next state → True next state；Transition Plan 回答“这个动作打算如何改变状态”；Transition Space 回答“在未看到真实下一状态时，Prior 认为结果可能落在哪些结构中”。两张 PCA 图是分别计算的，坐标不能直接比较；它们是诊断证据，而非 held-out evaluation。"],
        media: [
          {
            id: "generalizable-card-game-ai-reconstruction-viewer",
            title: "Reconstruction",
            description: "从 20 个 highlighted 样本中选择一个，即可对比从 viewer 精确导出的 Current state → Prior-predicted next state → True next state。每个状态面板都保留全部区域和实体，并可独立滚动查看；同时展示动作、完整卡牌效果和 reconstruction score。",
            kind: "synthesis-canvas",
            view: "reconstruction"
          },
          {
            id: "generalizable-card-game-ai-transition-plan-viewer",
            title: "Transition Plan",
            description: "包含全部 1,000 个确定性的 4-token transition-plan vector（PCA 前先对 token 求均值）。这是模型在解码下一状态前显式生成的中间计划：它如何理解这次动作和卡牌效果将怎样改变状态。Remove、墓地操作及不同 Summon／Discard 机制更容易分离，因为它们对应不同的状态转移路径。点击任意点可查看动作、完整卡牌描述和观察到的状态转移。",
            kind: "synthesis-canvas",
            view: "transition-plan"
          },
          {
            id: "generalizable-card-game-ai-transition-space-viewer",
            title: "Transition Space",
            description: "包含全部 1,000 个 Prior-inference transition vector。这是模型在未见真实下一状态时，对可能结果的表示。中心重叠是预期现象：多个效果会产生相似的最终状态；战斗伤害、随机／检索式实体生成因结果尚不确定而保留更宽的分布。点击任意点可查看动作、完整卡牌描述和观察到的状态转移。",
            kind: "synthesis-canvas",
            view: "transition-space"
          }
        ]
      },
      {
        title: "四次重大架构迭代",
        paragraphs: ["模型经历四个主要版本，每次迭代都针对上一版状态转移表示暴露出的限制。下列分数为 reconstruction/score = 1 / (1 + reconstruction loss)，数值越高越好。"],
        bullets: [
          "specific_v01 —— 建立 CVAE 基线，用于全局状态和固定 slot 的多区域重构；缺少源实体显式对齐，且无法表示来源未知的新实体。最佳稳定 20 条记录分数：0.2502。",
          "specific_entity_birth_v01 —— 引入 EntityStateTransformer、已有实体对齐、10 个 birth slots 与 Hungarian matching，使跨区域移动和来源未知实体生成能够被显式建模。最佳稳定分数：0.6179（相对基线 +147.0%）。",
          "specific_entity_birth_v02 —— 加入 Residual CardFusion，并将 birth decoder 从 2 层加深至 5 层，增强卡牌语义融合和新实体属性解码。最佳稳定分数：0.6992（相对 birth_v01 +13.2%）。",
          "specific_entity_birth_plan_wolpertinger_v01 —— 加入 4-token TransitionPlanner 与 plan-conditioned decoder，使动作到状态变化的中间结构可被显式建模；同时通过 binding augmentation 适应不同的卡牌效果描述。最佳稳定分数：0.8717（相对 birth_v02 +24.7%；相对基线观测值 +248.4%）。"
        ]
      },
      {
        title: "指标口径与边界",
        paragraphs: ["每个数字均取对应训练日志中最佳连续 20 条训练记录的滚动平均，而非单个波动较大的 batch；它反映模型在训练中曾达到的最佳稳定重构水平。"],
        bullets: [
          "数据来源：/mnt/data/trainData/checkpoints/logs；指标标签：reconstruction/score。",
          "基线与实体 birth 架构所含的 reconstruction loss 项不完全一致，因此跨架构提升应理解为训练日志中的观测结果，而非同一测试集 benchmark。",
          "birth_v01 → birth_v02 → plan_v01 的连续迭代使用更相近的目标，因此是更直接的架构改进依据。"
        ]
      },
      {
        title: "主要参考论文",
        paragraphs: ["页面上方链接包括 Entropy 24(10), 1441、arXiv:2206.12700 的论文，以及 arXiv:1512.07679 的 Deep Reinforcement Learning in Large Discrete Action Spaces。这些工作启发了项目的表征学习和规划中的策略学习方向。"]
      }
    ]
  },
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
      { title: "结果", paragraphs: ["改进后的 AI 相比项目历史强 AI 达到了超过 60% 的胜率。这个结果是与项目内部早期 AI 版本的对比，和页面上展示的单次训练 success_rate 曲线分开理解。"] },
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
    title: "基于视频的 3D 人体姿态估计",
    period: "2026 年 6 月 - 至今",
    role: "AI 程序员实习生",
    status: "MuteGravity 实习项目 · 进行中",
    mediaDetail: "合成数据 · 2D 关键点 · 图像增强的 3D 重建",
    thumbnail: {
      alt: "基于视频的 3D 人体姿态估计与 Unreal Engine 合成数据流水线缩略图。"
    },
    summary: "从 2D 关键点预测与图像特征到 3D 姿态重建：一个两阶段的基于视频的 3D 人体姿态估计流水线，覆盖 MetaHuman 合成数据生产、基于 SimCC 的 2D 关键点微调，以及基于改造 MixSTE 的图像增强 3D 姿态重建。",
    description: "这是我在 MuteGravity 担任 AI 程序员实习生期间参与的项目：从 MetaHuman 渲染视频中获取对齐的 2D / 3D 监督数据，再将 2D 骨骼点 token 和预训练 ViT 图像特征结合，从视频中重建 3D 人体姿态。",
    linkLabels: ["XRFeitoria", "MixSTE"],
    mediaGallery: {
      title: "流程证据与结果展示",
      intro: "封面图与四段项目录像依次展示对齐后的渲染标注、2D 微调对比、图像增强的 3D 重建，以及 Linux 容器化渲染服务。",
      items: [
        {
          title: "两阶段流程",
          description: "合成数据、2D 关键点和 3D 重建工作流的视觉概览。",
          alt: "基于视频的 3D 人体姿态估计流程概览。"
        },
        {
          title: "对齐后的渲染 2D 关键点",
          description: "修复视频帧与标签同步延迟后，由 MetaHuman 3D 数据投影得到的 2D 关键点。"
        },
        {
          title: "微调后的 2D 关键点对比",
          description: "展示源视频、原模型预测、微调后预测和叠加结果。原始模型已经很强，因此视觉差异较小。"
        },
        {
          title: "图像增强的 2D 到 3D 姿态重建",
          description: "使用 2D 骨骼点和图像特征、从头训练的 3D 姿态预测结果。"
        },
        {
          title: "Linux 容器化渲染服务",
          description: "复用型 Linux 容器中 Unreal Engine 渲染的浏览器监控界面；可视化仅用于监控，生产渲染时可移除。"
        }
      ]
    },
    sections: [
      {
        title: "项目概览",
        paragraphs: ["这是我从 2026 年 6 月起在 MuteGravity 参与的实习项目，也是一个两阶段的基于视频的 3D 人体姿态估计流水线。2D 关键点检测微调是第一阶段，图像增强的 3D 姿态重建是第二阶段。", "流程先在 Unreal Engine 中生成可控的 MetaHuman 视频与对齐标注，再使用生成数据微调 2D 关键点预测器，最后将 2D 关节预测和预训练图像特征结合来重建 3D 姿态。"],
        media: [{
          id: "video-based-3d-pose-cover",
          title: "两阶段流程",
          description: "合成数据、2D 关键点和 3D 重建工作流的视觉概览。",
          src: "images/project-thumbnails/finetune-2d-point-detection.png",
          alt: "基于视频的 3D 人体姿态估计流程概览。",
          kind: "image"
        }]
      },
      {
        title: "MetaHuman 数据生产",
        paragraphs: ["我搭建了用于生成两个模型阶段所需监督数据的 Unreal Engine 渲染流程。动作资源先被重定向到 MetaHuman 角色，再在渲染前进行清理与优化，以减少手部与身体等可见穿模。"],
        bullets: [
          "将 BVH 动作文件转换为 FBX，并使用 MotionBuilder 进行动作重定向。",
          "生成动画、角色与场景放置、服装、Style3D 相关配置、相机轨迹与相机旋转的渲染配置文件。",
          "通过 Python 和 XRFeitoria 驱动 Unreal Engine 持续渲染；Unreal 崩溃后可恢复，并能从已有进度继续。",
          "采集渲染帧、相机信息、MetaHuman 3D 点数据、Skel-hit 数据和投影得到的 2D 关键点。"
        ]
      },
      {
        title: "帧级标签同步",
        paragraphs: ["早期采集流程存在严重的对齐问题：3D 点数据相对视频有延迟，而且并不是一个固定帧数的偏移。根因是采集时机不一致：3D 点在 Unreal Engine 的每个 tick 获取，视频帧则在渲染帧写入，两个时间线无法保证一一对应。", "我修改了采集逻辑，使每个渲染帧写入后立即保存其对应的 3D 点数据。这样，渲染帧、3D 姿态和 2D 相机投影就在同一个渲染循环节点对齐；下方投影录像展示了修复后得到的高精度 2D 标注。"],
        media: [{
          id: "rendered-2d-keypoint-projection",
          title: "对齐后的渲染 2D 关键点",
          description: "修复视频帧与标签同步延迟后，由 MetaHuman 3D 数据投影得到的 2D 关键点。",
          src: "videos/video-based-3d-human-pose-estimation/rendered-2d-keypoint-projection.mp4",
          poster: "videos/video-based-3d-human-pose-estimation/rendered-2d-keypoint-projection.jpg",
          type: "video/mp4"
        }]
      },
      {
        title: "2D 关键点模型重建与微调",
        paragraphs: ["我拿到的是一个采用 SimCC 坐标分类的、只能预测的 .pth checkpoint。我解析其 layer 和参数结构，重建了兼容且可训练的 PyTorch 模型，并验证重建模型与原模型的预测行为一致。", "原模型本身已经很强，因此微调后的视觉变化较小；微调的价值在于让检测模型适应渲染数据分布，成为可靠的 3D 重建输入阶段。"],
        bullets: [
          "使用基于 Student-t 分布 soft target 的 Soft Cross Entropy，进行面向分布的坐标监督。",
          "使用 Wasserstein1DLoss 约束预测点位置在 1D 分布上的距离。",
          "下方录像并列展示了源视频、原始预测、微调预测和叠加对比。"
        ],
        media: [{
          id: "finetuned-2d-keypoint-comparison",
          title: "微调后的 2D 关键点对比",
          description: "展示源视频、原模型预测、微调后预测和叠加结果。原始模型已经很强，因此视觉差异较小。",
          src: "videos/video-based-3d-human-pose-estimation/finetuned-2d-keypoint-comparison.mp4",
          poster: "videos/video-based-3d-human-pose-estimation/finetuned-2d-keypoint-comparison.jpg",
          type: "video/mp4"
        }]
      },
      {
        title: "图像增强的 3D 姿态重建",
        paragraphs: ["只输入 2D 关键点的 pose lifting 模型存在天然的深度歧义：相似的 2D 骨骼布局可能对应不同 3D 姿态，例如手究竟在身体前方还是后方。为解决这个问题，我从头训练 2D 到 3D 模型，并在 2D 关节输入中加入预训练 ViT 图像特征。", "模型基于改造后的 MixSTE。每个骨骼点都是一个 token，输入和输出的骨骼点数量保持一致。网络先在每一帧内通过 Spatial Transformer 建模骨骼点关系，然后通过 Cross-Attention Transformer 融合 ViT 图像特征与骨骼 token，最后由 Temporal Transformer 建模跨帧运动，并为每个关节输出 3D 坐标。"],
        bullets: [
          "输入：2D 关节 token 与预训练 ViT 图像特征。",
          "Spatial Transformer → Cross-Attention Transformer → Temporal Transformer。",
          "输出：每个输入骨骼点对应一个 3D 坐标。",
          "训练采用简化的 Gravity View：假设相机固定，仅输出俯仰角和倾斜角以解耦视角，重点学习稳定的 3D 人体结构。"
        ],
        media: [{
          id: "image-aware-3d-pose-reconstruction",
          title: "图像增强的 2D 到 3D 姿态重建",
          description: "使用 2D 骨骼点和图像特征、从头训练的 3D 姿态预测结果。",
          src: "videos/video-based-3d-human-pose-estimation/image-aware-3d-pose-reconstruction.mp4",
          poster: "videos/video-based-3d-human-pose-estimation/image-aware-3d-pose-reconstruction.jpg",
          type: "video/mp4"
        }]
      },
      {
        title: "Linux 容器化 Unreal Engine 渲染",
        paragraphs: ["原有渲染流程主要基于 Windows，尤其受 Style3D 相关限制影响较大。由于 Unreal Engine 的渲染依赖图形显示环境，将其作为 Linux 自动化服务部署十分困难；此前将服务迁移到 Linux 的尝试也因此没有继续推进。", "我在工作之外独立研究并测试部署方案：通过 Wine 运行 Windows 版本的 Unreal Engine，并结合虚拟显示环境，让其能够在 Linux 服务器上完成渲染任务。我进一步将该环境封装为可复用容器，并把渲染能力作为 Web 服务提供。下方录像中的浏览器界面只是可选的监控层，生产渲染时不需要保留。"],
        media: [{
          id: "linux-container-rendering-service",
          title: "Linux 容器化渲染服务",
          description: "复用型 Linux 容器中 Unreal Engine 渲染的浏览器监控界面；可视化仅用于监控，生产渲染时可移除。",
          src: "videos/video-based-3d-human-pose-estimation/linux-container-rendering-service.mp4",
          poster: "videos/video-based-3d-human-pose-estimation/linux-container-rendering-service.jpg",
          type: "video/mp4"
        }]
      },
      { title: "我的贡献", paragraphs: ["我参与并完成了整条流程的工作：Unreal Engine 与 MetaHuman 数据生产、动作重定向与优化、对齐的 2D / 3D 标签采集、帧同步修复、2D 模型重建与微调、图像增强的 2D 到 3D 模型设计，以及 Linux 容器化渲染服务部署。"] }
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
