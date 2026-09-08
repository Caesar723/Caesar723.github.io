import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { cvUrl, portfolio } from "./data/portfolio";

const supportedLanguages = ["en", "zh"];
const languageOptions = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" }
];

function assetUrl(path) {
  if (!path) return "";
  if (/^(https?:|mailto:|#)/.test(path)) return path;

  return import.meta.env.BASE_URL + path.replace(/^\/+/, "");
}

function getInitialLanguage() {
  if (typeof window === "undefined") return "en";

  try {
    const storedLanguage = window.localStorage.getItem("portfolio-language");
    if (supportedLanguages.includes(storedLanguage)) return storedLanguage;
  } catch {
    return "en";
  }

  return "en";
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function PageTitle({ children, siteName }) {
  useEffect(() => {
    document.title = children + " | " + siteName;
  }, [children, siteName]);

  return null;
}

function TagList({ items, label }) {
  return (
    <div className="tag-list" aria-label={label}>
      {items.map((item) => <span className="tag" key={item}>{item}</span>)}
    </div>
  );
}

function SidebarIcon({ label }) {
  const iconPaths = {
    location: "icons/location.svg",
    email: "icons/email.svg",
    github: "icons/github.svg",
    website: "icons/website.svg",
    download: "icons/download.svg"
  };

  return <img className="sidebar-icon" src={assetUrl(iconPaths[label])} alt="" aria-hidden="true" />;
}

function LanguageToggle({ language, onLanguageChange, ui }) {
  return (
    <div className="language-toggle" aria-label={ui.languageSwitcher}>
      {languageOptions.map((option) => (
        <button
          aria-pressed={language === option.code}
          className={language === option.code ? "is-active" : ""}
          key={option.code}
          onClick={() => onLanguageChange(option.code)}
          type="button"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function Sidebar({ content }) {
  const { profile, ui } = content;

  return (
    <aside className="profile" aria-label={ui.profileAria}>
      <img className="profile-avatar" src={assetUrl(profile.avatar)} alt={profile.name} width="140" height="140" />
      <h1 className="profile__name">{profile.name}</h1>
      <p className="profile__title">{profile.role}</p>
      <p className="profile__location"><SidebarIcon label="location" /> <span>{profile.location}</span></p>
      <ul className="profile-links">
        <li><a href={"mailto:" + profile.email}><SidebarIcon label="email" /> <span>{profile.email}</span></a></li>
        <li><a href={profile.github} target="_blank" rel="noreferrer"><SidebarIcon label="github" /> <span>{profile.githubLabel}</span></a></li>
        {profile.website ? (
          <li><a href={profile.website} target="_blank" rel="noreferrer"><SidebarIcon label="website" /> <span>{profile.websiteLabel}</span></a></li>
        ) : null}
      </ul>
      <a className="cv-link" href={assetUrl(cvUrl)} download><SidebarIcon label="download" /> <span>{ui.downloadCv}</span></a>
      <p className="profile-note">{profile.note}</p>
    </aside>
  );
}

function Header({ content, language, onLanguageChange }) {
  const { profile, ui } = content;

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-brand" to="/">{profile.name}</Link>
        <div className="header-actions">
          <nav className="main-nav" aria-label={ui.navAria}>
            <NavLink end to="/">{ui.nav.home}</NavLink>
            <NavLink to="/projects">{ui.nav.projects}</NavLink>
            <NavLink to="/cv">{ui.nav.cv}</NavLink>
          </nav>
          <LanguageToggle language={language} onLanguageChange={onLanguageChange} ui={ui} />
        </div>
      </div>
    </header>
  );
}

function Layout({ children, content, language, onLanguageChange }) {
  return (
    <>
      <Header content={content} language={language} onLanguageChange={onLanguageChange} />
      <main className="site-shell">
        <Sidebar content={content} />
        <article className="content">{children}</article>
      </main>
      <footer className="site-footer"><p>{content.ui.footer}</p></footer>
    </>
  );
}

function ProjectCard({ project, ui }) {
  const [hasThumbnailError, setHasThumbnailError] = useState(false);
  const thumbnailSrc = project.thumbnail?.src ? assetUrl(project.thumbnail.src) : "";
  const shouldRenderThumbnail = thumbnailSrc && !hasThumbnailError;

  return (
    <article className="project-card">
      <Link className="project-card__link" to={"/projects/" + project.slug} aria-label={ui.viewProject + ": " + project.title}>
        <div className="project-card__media">
          {shouldRenderThumbnail ? (
            <img
              className="project-card__thumbnail"
              src={thumbnailSrc}
              alt={project.thumbnail.alt || project.title}
              loading="lazy"
              decoding="async"
              onError={() => setHasThumbnailError(true)}
            />
          ) : (
            <div className="project-media-label" role="img" aria-label={project.mediaLabel + ui.projectPreviewSuffix}>
              <span>{project.mediaLabel}</span>
              <strong>{project.mediaDetail}</strong>
            </div>
          )}
        </div>
        <div className="project-card__body">
          <p className="eyebrow">{project.period} <span aria-hidden="true">·</span> {project.role}</p>
          <h2>{project.title}</h2>
          <p className="project-card__summary">{project.summary}</p>
          <p className="project-card__description">{project.description}</p>
          <TagList items={project.technologies} label={ui.technologies} />
          <span className="project-card__cta">{ui.viewProject} <span aria-hidden="true">→</span></span>
        </div>
      </Link>
    </article>
  );
}

function Home({ content }) {
  const { pages } = content.ui;
  const home = pages.home;
  const contact = home.contact;

  return (
    <>
      <PageTitle siteName={content.profile.name}>{home.title}</PageTitle>
      <h1>{home.heading}</h1>
      {home.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

      <h2>{home.skillsHeading}</h2>
      <div className="skill-groups">
        {content.skills.map((skill) => (
          <section className="skill-group" key={skill.group}>
            <h3>{skill.group}</h3>
            <TagList items={skill.items} label={content.ui.technologies} />
          </section>
        ))}
      </div>

      <h2>{home.selectedProjectsHeading}</h2>
      <div className="project-list project-list--selected">
        {content.selectedProjects.map((project) => <ProjectCard key={project.slug} project={project} ui={content.ui} />)}
      </div>
      <p className="section-action"><Link to="/projects">{home.allProjects} <span aria-hidden="true">→</span></Link></p>

      <h2>{home.contactHeading}</h2>
      <p>
        {contact.beforeEmail}<a href={"mailto:" + content.profile.email}>{content.profile.email}</a>{contact.afterEmail}
        <a href={content.profile.github} target="_blank" rel="noreferrer">{contact.github}</a>{contact.afterGithub}
        {content.profile.website ? (
          <><a href={content.profile.website} target="_blank" rel="noreferrer">{contact.website}</a>{contact.afterWebsite}</>
        ) : null}
        <a href={assetUrl(cvUrl)} download>{contact.cv}</a>{contact.end}
      </p>
    </>
  );
}

function Projects({ content }) {
  const projectsPage = content.ui.pages.projects;

  return (
    <>
      <PageTitle siteName={content.profile.name}>{projectsPage.title}</PageTitle>
      <h1>{projectsPage.heading}</h1>
      <p>{projectsPage.intro}</p>
      <p className="project-count">{content.projects.length}{projectsPage.countSuffix}</p>
      <div className="project-list">
        {content.projects.map((project) => <ProjectCard key={project.slug} project={project} ui={content.ui} />)}
      </div>
    </>
  );
}

function ProjectLinks({ links, ui }) {
  if (!links.length) return null;

  return (
    <div className="project-links" aria-label={ui.projectLinks}>
      {links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} <span aria-hidden="true">↗</span></a>)}
    </div>
  );
}

function ProjectMediaCard({ item, ui }) {
  const [hasMediaError, setHasMediaError] = useState(false);
  const mediaSrc = item.src ? assetUrl(item.src) : "";
  const posterSrc = item.poster ? assetUrl(item.poster) : "";
  const isImage = item.kind === "image" || item.type?.startsWith("image/");
  const isEmbed = item.kind === "embed";
  const shouldRenderMedia = mediaSrc && !hasMediaError;

  return (
    <article className="media-card">
      <div className="media-card__frame">
        {shouldRenderMedia && isEmbed ? (
          <iframe
            allow="fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={mediaSrc}
            title={item.title}
            onError={() => setHasMediaError(true)}
          />
        ) : shouldRenderMedia && isImage ? (
          <img
            src={mediaSrc}
            alt={item.alt || item.title}
            loading="lazy"
            onError={() => setHasMediaError(true)}
          />
        ) : shouldRenderMedia ? (
          <video
            controls
            muted
            playsInline
            preload="none"
            poster={posterSrc || undefined}
            onError={() => setHasMediaError(true)}
          >
            <source src={mediaSrc} type={item.type || "video/mp4"} />
          </video>
        ) : (
          <div className="media-card__placeholder">
            <span>{ui.videoUnavailable}</span>
          </div>
        )}
      </div>
      <div className="media-card__body">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </article>
  );
}

function ProjectMediaGallery({ gallery, ui }) {
  const scrollerRef = useRef(null);

  const scrollByPage = (direction) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    scroller.scrollBy({
      left: direction * scroller.clientWidth * 0.9,
      behavior: "smooth"
    });
  };

  return (
    <section className="project-media-gallery" aria-label={gallery.title}>
      <div className="project-media-gallery__header">
        <div>
          <h2>{gallery.title}</h2>
          <p>{gallery.intro}</p>
        </div>
        {gallery.items.length > 1 ? (
          <div className="media-scroll-actions">
            <button type="button" aria-label={ui.scrollVideosLeft} onClick={() => scrollByPage(-1)}>←</button>
            <button type="button" aria-label={ui.scrollVideosRight} onClick={() => scrollByPage(1)}>→</button>
          </div>
        ) : null}
      </div>
      <div className={gallery.items.length === 1 ? "media-scroller media-scroller--single" : "media-scroller"} ref={scrollerRef} tabIndex="0">
        {gallery.items.map((item) => <ProjectMediaCard key={item.id} item={item} ui={ui} />)}
      </div>
    </section>
  );
}

const transitionColors = {
  remove: "#e5c646",
  summon: "#4f8cc9",
  discard: "#ef8a39",
  opponent_damage: "#d5525a",
  life_gain: "#4ba36d",
  graveyard_change: "#8862b8",
  draw: "#35a6a2",
  mana_change: "#bf9a30",
  no_major_change: "#858b91",
  self_damage: "#b9538c"
};

const humanizeTransition = (value) => value.replaceAll("_", " ");

function ReconstructionStatePanel({ state }) {
  return <section className="reconstruction-state-panel">
    <header>
      <strong>{state.title}</strong>
      <span>Opponent {state.opponentLife} · Self {state.selfLife}</span>
    </header>
    <div className="reconstruction-state-panel__zones">
      {state.zones.map((zone) => <details className="reconstruction-zone" key={zone.name}>
        <summary><span>{zone.name}</span><small>{zone.count}</small></summary>
        {zone.cards.length ? <div className="reconstruction-zone__cards">
          {zone.cards.map((card, index) => <article key={`${card.title}-${index}`}>
            <strong>{card.title}</strong>
            {card.route ? <span className="reconstruction-zone__route">{card.route}</span> : null}
            {card.stats.length ? <small>{card.stats.join(" · ")}</small> : null}
            {card.tags.length ? <em>{card.tags.join(" · ")}</em> : null}
          </article>)}
        </div> : <p>Empty</p>}
      </details>)}
    </div>
  </section>;
}

function SynthesisCanvas({ view }) {
  const [points, setPoints] = useState(null);
  const [stateSnapshots, setStateSnapshots] = useState(null);
  const [loadError, setLoadError] = useState(false);
  const [selectedSourceIndex, setSelectedSourceIndex] = useState(null);
  const canvasRef = useRef(null);
  const dataset = view === "transition-plan" ? "transition-plan" : "transition-space";
  const isReconstruction = view === "reconstruction";
  const isTransitionSpace = view === "transition-space";

  useEffect(() => {
    let active = true;
    setPoints(null);
    setStateSnapshots(null);
    setLoadError(false);
    fetch(assetUrl(`data/generalizable-card-game-ai/${dataset}.json`))
      .then((response) => response.ok ? response.json() : Promise.reject(new Error("Unable to load snapshot")))
      .then((data) => {
        if (!active) return;
        setPoints(data);
        setSelectedSourceIndex(data.find((point) => point.is_highlighted)?.source_index ?? data[0]?.source_index ?? null);
      })
      .catch(() => { if (active) setLoadError(true); });
    if (isReconstruction) {
      fetch(assetUrl("data/generalizable-card-game-ai/reconstruction-states.json"))
        .then((response) => response.ok ? response.json() : Promise.reject(new Error("Unable to load states")))
        .then((data) => { if (active) setStateSnapshots(data.samples); })
        .catch(() => { if (active) setLoadError(true); });
    }
    return () => { active = false; };
  }, [dataset, isReconstruction]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !points) return undefined;
    const baseWidth = 760;
    const baseHeight = isReconstruction ? 260 : 390;
    const getCoordinates = (point) => isTransitionSpace ? point.coordinates.prior : point;
    const selectedPoint = points.find((point) => point.source_index === selectedSourceIndex) || points[0];
    const draw = () => {
      const cssWidth = canvas.clientWidth || baseWidth;
      const scale = cssWidth / baseWidth;
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = Math.round(cssWidth * pixelRatio);
      canvas.height = Math.round(baseHeight * scale * pixelRatio);
      canvas.style.height = `${baseHeight * scale}px`;
      const context = canvas.getContext("2d");
      context.setTransform(pixelRatio * scale, 0, 0, pixelRatio * scale, 0, 0);
      context.fillStyle = "#242424";
      context.fillRect(0, 0, baseWidth, baseHeight);

      if (isReconstruction) {
        const point = selectedPoint;
        const card = point.card_used;
        const score = point.reconstruction_scores?.prior ?? point.reconstruction_score ?? 0;
        const random = /random/i.test(card.description || "");
        const wrapText = (text, x, y, maxWidth, lineHeight, maxLines) => {
          const words = text.split(/\s+/);
          let line = "";
          let lineIndex = 0;
          words.forEach((word, index) => {
            const candidate = line ? `${line} ${word}` : word;
            if (context.measureText(candidate).width > maxWidth && line && lineIndex < maxLines - 1) {
              context.fillText(line, x, y + lineIndex * lineHeight);
              line = word;
              lineIndex += 1;
            } else if (lineIndex < maxLines) {
              line = candidate;
            }
            if (index === words.length - 1 && lineIndex < maxLines) context.fillText(line, x, y + lineIndex * lineHeight);
          });
        };
        context.fillStyle = transitionColors[point.state_delta.change_type] || "#858b91";
        context.fillRect(0, 0, 10, baseHeight);
        context.fillStyle = "#ffffff";
        context.font = "700 20px system-ui, sans-serif";
        context.fillText(`Sample #${point.reconstruction_sample_id} · ${humanizeTransition(point.state_delta.change_type)}`, 30, 42);
        if (random) {
          context.strokeStyle = "#fff";
          context.lineWidth = 1.6;
          context.beginPath(); context.arc(700, 35, 8, 0, Math.PI * 2); context.stroke();
        }
        context.fillStyle = "#d8d8d8";
        context.font = "13px system-ui, sans-serif";
        context.fillText(point.action.label, 30, 68);
        context.fillStyle = "rgba(255,255,255,.11)";
        context.fillRect(30, 90, 700, 1);
        context.fillStyle = "#bdbdbd";
        context.font = "600 11px system-ui, sans-serif";
        context.fillText("CARD EFFECT", 30, 120);
        context.fillStyle = "#f2f2f2";
        context.font = "14px system-ui, sans-serif";
        wrapText(card.description || "No card description", 30, 146, 680, 21, 4);
        context.fillStyle = "#bdbdbd";
        context.font = "12px system-ui, sans-serif";
        context.fillText(`${card.type} · ${(card.colors || []).join("") || "colourless"} · prior reconstruction score ${score.toFixed(6)}`, 30, 238);
        return;
      }

      const padding = { top: 24, right: 28, bottom: 48, left: 58 };
      const xs = points.map((point) => getCoordinates(point).x);
      const ys = points.map((point) => getCoordinates(point).y);
      const minX = Math.min(...xs); const maxX = Math.max(...xs);
      const minY = Math.min(...ys); const maxY = Math.max(...ys);
      const scaleX = (x) => padding.left + ((x - minX) / (maxX - minX)) * (baseWidth - padding.left - padding.right);
      const scaleY = (y) => baseHeight - padding.bottom - ((y - minY) / (maxY - minY)) * (baseHeight - padding.top - padding.bottom);
      context.strokeStyle = "rgba(255,255,255,.23)";
      context.lineWidth = 1;
      [0.2, 0.4, 0.6, 0.8].forEach((ratio) => {
        const x = padding.left + ratio * (baseWidth - padding.left - padding.right);
        const y = padding.top + ratio * (baseHeight - padding.top - padding.bottom);
        context.beginPath(); context.moveTo(x, padding.top); context.lineTo(x, baseHeight - padding.bottom); context.stroke();
        context.beginPath(); context.moveTo(padding.left, y); context.lineTo(baseWidth - padding.right, y); context.stroke();
      });
      points.forEach((point) => {
        const random = /random/i.test(point.card_used.description || "");
        const coordinates = getCoordinates(point);
        const isSelected = point.source_index === selectedPoint.source_index;
        context.fillStyle = transitionColors[point.state_delta.change_type] || "#858b91";
        context.globalAlpha = point.is_highlighted ? 1 : .72;
        context.beginPath(); context.arc(scaleX(coordinates.x), scaleY(coordinates.y), point.is_highlighted ? 4.6 : 3.1, 0, Math.PI * 2); context.fill();
        if (random || isSelected) { context.globalAlpha = 1; context.strokeStyle = "#fff"; context.lineWidth = isSelected ? 2 : 1.1; context.beginPath(); context.arc(scaleX(coordinates.x), scaleY(coordinates.y), isSelected ? 8 : point.is_highlighted ? 7 : 5.2, 0, Math.PI * 2); context.stroke(); }
      });
      context.globalAlpha = 1;
      context.fillStyle = "#f2f2f2";
      context.font = "600 13px system-ui, sans-serif";
      context.textAlign = "center";
      context.fillText("PC1", baseWidth / 2, baseHeight - 12);
      context.save(); context.translate(17, baseHeight / 2); context.rotate(-Math.PI / 2); context.fillText("PC2", 0, 0); context.restore();
    };
    draw();
    const observer = new ResizeObserver(draw);
    observer.observe(canvas);
    return () => observer.disconnect();
  }, [isReconstruction, isTransitionSpace, points, selectedSourceIndex]);

  const samples = points?.filter((point) => point.is_highlighted).sort((a, b) => a.reconstruction_sample_id.localeCompare(b.reconstruction_sample_id)) || [];
  const selectedPoint = points?.find((point) => point.source_index === selectedSourceIndex) || points?.[0];
  const selectedStateSnapshot = selectedPoint && stateSnapshots?.find((snapshot) => snapshot.sampleId === selectedPoint.reconstruction_sample_id);
  const selectedSummary = selectedPoint ? `${humanizeTransition(selectedPoint.state_delta.change_type)} · ${selectedPoint.action.label}` : "";

  const selectNearestPoint = (event) => {
    if (!points || isReconstruction) return;
    const canvas = canvasRef.current;
    const bounds = canvas.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 760;
    const y = ((event.clientY - bounds.top) / bounds.height) * 390;
    const getCoordinates = (point) => isTransitionSpace ? point.coordinates.prior : point;
    const xs = points.map((point) => getCoordinates(point).x);
    const ys = points.map((point) => getCoordinates(point).y);
    const minX = Math.min(...xs); const maxX = Math.max(...xs);
    const minY = Math.min(...ys); const maxY = Math.max(...ys);
    const scaleX = (value) => 58 + ((value - minX) / (maxX - minX)) * 674;
    const scaleY = (value) => 342 - ((value - minY) / (maxY - minY)) * 318;
    const nearest = points.map((point) => ({ point, distance: Math.hypot(scaleX(getCoordinates(point).x) - x, scaleY(getCoordinates(point).y) - y) })).sort((a, b) => a.distance - b.distance)[0];
    if (nearest?.distance <= 14) setSelectedSourceIndex(nearest.point.source_index);
  };

  if (loadError) return <div className="section-media__placeholder">Unable to load the packaged synthesis snapshot.</div>;
  return <>
    {isReconstruction ? <div className="synthesis-sample-selector" role="group" aria-label="Choose a highlighted reconstruction sample">
      {samples.map((sample) => <button type="button" aria-label={`Inspect reconstruction sample ${sample.reconstruction_sample_id}`} key={sample.source_index} className={sample.source_index === selectedSourceIndex ? "is-selected" : ""} onClick={() => setSelectedSourceIndex(sample.source_index)}>{sample.reconstruction_sample_id}</button>)}
    </div> : null}
    <canvas className={`synthesis-canvas${isReconstruction ? "" : " is-selectable"}`} ref={canvasRef} onClick={selectNearestPoint} aria-label={isReconstruction ? "Selected highlighted reconstruction sample from step 148000" : `All 1000 ${view} PCA points from step 148000. Click a point to inspect it.`} />
    {selectedPoint ? <div className="synthesis-selection">
      <strong>{isReconstruction ? `#${selectedPoint.reconstruction_sample_id}` : "Selected point"}</strong>
      <span>{selectedSummary}</span>
      {!isReconstruction ? <>
        <p>{selectedPoint.card_used.description}</p>
        <small>{selectedPoint.card_used.type} · {(selectedPoint.card_used.colors || []).join("") || "colourless"}</small>
      </> : null}
    </div> : null}
    {isReconstruction && selectedStateSnapshot ? <div className="reconstruction-state-comparison" aria-label="Current, predicted, and true next game states">
      {selectedStateSnapshot.states.map((state) => <ReconstructionStatePanel key={state.title} state={state} />)}
    </div> : null}
  </>;
}

function TrainingStats({ item }) {
  const highlights = [
    [item.labels.best, item.latest.best],
    [item.labels.p90, item.latest.p90],
    [item.labels.peak, item.latest.peak],
    [item.labels.high90, item.latest.high90],
    [item.labels.high80, item.latest.high80]
  ];

  return (
    <div className="training-stats" aria-label={item.title}>
      <div className="training-stats__latest">
        <div>
          <span className="training-stats__eyebrow">{item.labels.latest}</span>
          <strong>reconstruction/score</strong>
        </div>
        <dl className="training-stats__highlights">
          {highlights.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="training-stats__table-wrap" tabIndex="0" aria-label="Scrollable training score table">
        <table className="training-stats__table">
          <thead>
            <tr>
              <th scope="col">{item.labels.version}</th>
              <th scope="col">{item.labels.best}</th>
              <th scope="col">{item.labels.window}</th>
              <th scope="col">{item.labels.peak}</th>
              <th scope="col">{item.labels.p90}</th>
            </tr>
          </thead>
          <tbody>
            {item.stats.map((stat) => (
              <tr className={stat.version === "birth_plan_v01" ? "is-latest" : undefined} key={stat.version}>
                <th scope="row">{stat.version}</th>
                <td>{stat.best}</td>
                <td>{stat.window}</td>
                <td>{stat.peak}</td>
                <td>{stat.p90}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ProjectSectionMediaItem({ item, ui }) {
  const [hasMediaError, setHasMediaError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const mediaSrc = item.src ? assetUrl(item.src) : "";
  const posterSrc = item.poster ? assetUrl(item.poster) : "";
  const isImage = item.kind === "image" || item.type?.startsWith("image/");
  const isEmbed = item.kind === "embed";
  const isSynthesisCanvas = item.kind === "synthesis-canvas";
  const isTrainingStats = item.kind === "training-stats";
  const shouldRenderMedia = mediaSrc && !hasMediaError;
  const caption = <figcaption className={isSynthesisCanvas ? "section-media__caption--top" : undefined}>
    <strong>{item.title}</strong>
    <span>{item.description}</span>
  </figcaption>;

  return (
    <figure className="section-media">
      {isSynthesisCanvas ? caption : null}
      <div className={`section-media__frame${isImage ? "" : isEmbed ? " section-media__frame--embed" : isSynthesisCanvas ? " section-media__frame--canvas" : isTrainingStats ? " section-media__frame--training-stats" : " section-media__frame--video"}`}>
        {isSynthesisCanvas ? (
          <SynthesisCanvas view={item.view} />
        ) : isTrainingStats ? (
          <TrainingStats item={item} />
        ) : shouldRenderMedia && isEmbed ? (
          <iframe src={mediaSrc} title={item.title} loading="lazy" onError={() => setHasMediaError(true)} />
        ) : shouldRenderMedia && isImage ? (
          <img src={mediaSrc} alt={item.alt || item.title} loading="lazy" onError={() => setHasMediaError(true)} />
        ) : shouldRenderMedia ? (
          <video
            ref={videoRef}
            controls
            muted
            playsInline
            preload="metadata"
            poster={posterSrc || undefined}
            onError={() => setHasMediaError(true)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          >
            <source src={mediaSrc} type={item.type || "video/mp4"} />
          </video>
        ) : (
          <div className="section-media__placeholder">{ui.videoUnavailable}</div>
        )}
        {shouldRenderMedia && !isImage && !isEmbed && !isSynthesisCanvas && !isTrainingStats && !isPlaying ? (
          <button type="button" className="section-media__play" aria-label={`${ui.playVideo}: ${item.title}`} onClick={() => void videoRef.current?.play()}>
            <span aria-hidden="true">▶</span>
            <span>{ui.playVideo}</span>
          </button>
        ) : null}
      </div>
      {!isSynthesisCanvas ? caption : null}
    </figure>
  );
}

function ProjectSectionMedia({ items, ui }) {
  const isSynthesisGroup = items.length > 1 && items.every((item) => item.kind === "synthesis-canvas");
  return (
    <div className={`section-media-list${isSynthesisGroup ? " section-media-list--synthesis" : ""}`}>
      {items.map((item) => <ProjectSectionMediaItem item={item} key={item.id} ui={ui} />)}
    </div>
  );
}

function ProjectDetail({ content }) {
  const { slug } = useParams();
  const projectIndex = content.projects.findIndex((project) => project.slug === slug || project.aliases?.includes(slug));
  const project = content.projects[projectIndex];
  const orderedSections = project.sections
    .map((section, index) => ({ section, index }))
    .sort((a, b) => (a.section.order ?? a.index) - (b.section.order ?? b.index))
    .map(({ section }) => section);

  if (!project) return <Navigate to="/projects" replace />;

  const previousProject = content.projects[projectIndex - 1];
  const nextProject = content.projects[projectIndex + 1];

  return (
    <>
      <PageTitle siteName={content.profile.name}>{project.title}</PageTitle>
      <header className="project-hero">
        <p className="eyebrow">{project.period} <span aria-hidden="true">·</span> {project.role}</p>
        <h1>{project.title}</h1>
        <p className="project-lede">{project.summary}</p>
        <dl className="project-meta">
          <div><dt>{content.ui.status}</dt><dd>{project.status}</dd></div>
          <div><dt>{content.ui.role}</dt><dd>{project.role}</dd></div>
        </dl>
        <TagList items={project.technologies} label={content.ui.technologies} />
        <ProjectLinks links={project.links} ui={content.ui} />
      </header>

      {project.mediaGallery && !project.inlineMedia ? (
        <ProjectMediaGallery gallery={project.mediaGallery} ui={content.ui} />
      ) : !project.inlineMedia ? (
        <div className="project-cover-placeholder" role="img" aria-label={project.mediaLabel + content.ui.projectCoverSuffix}>
          <span>{project.mediaLabel}</span>
          <strong>{project.mediaDetail}</strong>
        </div>
      ) : null}

      <div className="project-body">
        {orderedSections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.bullets?.length ? (
              <ul>
                {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            ) : null}
            {section.media?.length ? <ProjectSectionMedia items={section.media} ui={content.ui} /> : null}
          </section>
        ))}
      </div>

      <nav className="project-pager" aria-label={content.ui.projectLinks}>
        <Link to="/projects">← {content.ui.backToProjects}</Link>
        <span className="project-pager__next">
          {previousProject && <Link to={"/projects/" + previousProject.slug}>← {previousProject.title}</Link>}
          {nextProject && <Link to={"/projects/" + nextProject.slug}>{nextProject.title} →</Link>}
        </span>
      </nav>
    </>
  );
}

function CV({ content }) {
  const cvPage = content.ui.pages.cv;

  return (
    <>
      <PageTitle siteName={content.profile.name}>{cvPage.title}</PageTitle>
      <h1>{cvPage.heading}</h1>
      <p>{cvPage.intro}</p>
      <p className="cv-actions"><a className="button" href={assetUrl(cvUrl)} download>{content.ui.downloadCv} <span aria-hidden="true">↓</span></a></p>

      <h2>{cvPage.experienceHeading}</h2>
      {content.experience.map((item) => (
        <section className="cv-entry" key={item.role}>
          <div className="cv-entry__heading">
            <h3>{item.role}</h3>
            <p>{item.organisation} <span aria-hidden="true">·</span> {item.period}</p>
          </div>
          <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
        </section>
      ))}

      <h2>{cvPage.educationHeading}</h2>
      {content.education.map((item) => (
        <section className="cv-entry" key={item.degree}>
          <div className="cv-entry__heading">
            <h3>{item.degree}</h3>
            <p>{item.school} <span aria-hidden="true">·</span> {item.period}</p>
          </div>
          <p>{item.details}</p>
        </section>
      ))}

      <h2>{cvPage.skillsHeading}</h2>
      <div className="skill-groups">
        {content.skills.map((skill) => (
          <section className="skill-group" key={skill.group}>
            <h3>{skill.group}</h3>
            <p>{skill.items.join(" · ")}</p>
          </section>
        ))}
      </div>

      <h2>{cvPage.selectedProjectsHeading}</h2>
      <ul className="plain-list">
        {content.projects.map((project) => <li key={project.slug}><Link to={"/projects/" + project.slug}>{project.title}</Link> — {project.summary}</li>)}
      </ul>
    </>
  );
}

function NotFound({ content }) {
  const notFound = content.ui.notFound;

  return (
    <>
      <PageTitle siteName={content.profile.name}>{notFound.title}</PageTitle>
      <h1>{notFound.heading}</h1>
      <p>{notFound.text}</p>
      <p className="section-action"><Link to="/">{notFound.action} <span aria-hidden="true">→</span></Link></p>
    </>
  );
}

export default function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const content = portfolio[language] ?? portfolio.en;

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

    try {
      window.localStorage.setItem("portfolio-language", language);
    } catch {
      return;
    }
  }, [language]);

  return (
    <>
      <ScrollToTop />
      <Layout content={content} language={language} onLanguageChange={setLanguage}>
        <Routes>
          <Route path="/" element={<Home content={content} />} />
          <Route path="/projects" element={<Projects content={content} />} />
          <Route path="/projects/:slug" element={<ProjectDetail content={content} />} />
          <Route path="/cv" element={<CV content={content} />} />
          <Route path="*" element={<NotFound content={content} />} />
        </Routes>
      </Layout>
    </>
  );
}
