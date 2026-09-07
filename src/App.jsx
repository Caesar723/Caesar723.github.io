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

function ProjectSectionMediaItem({ item, ui }) {
  const [hasMediaError, setHasMediaError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const mediaSrc = item.src ? assetUrl(item.src) : "";
  const posterSrc = item.poster ? assetUrl(item.poster) : "";
  const isImage = item.kind === "image" || item.type?.startsWith("image/");
  const shouldRenderMedia = mediaSrc && !hasMediaError;

  return (
    <figure className="section-media">
      <div className={`section-media__frame${isImage ? "" : " section-media__frame--video"}`}>
        {shouldRenderMedia && isImage ? (
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
        {shouldRenderMedia && !isImage && !isPlaying ? (
          <button type="button" className="section-media__play" aria-label={`${ui.playVideo}: ${item.title}`} onClick={() => void videoRef.current?.play()}>
            <span aria-hidden="true">▶</span>
            <span>{ui.playVideo}</span>
          </button>
        ) : null}
      </div>
      <figcaption>
        <strong>{item.title}</strong>
        <span>{item.description}</span>
      </figcaption>
    </figure>
  );
}

function ProjectSectionMedia({ items, ui }) {
  return (
    <div className="section-media-list">
      {items.map((item) => <ProjectSectionMediaItem item={item} key={item.id} ui={ui} />)}
    </div>
  );
}

function ProjectDetail({ content }) {
  const { slug } = useParams();
  const projectIndex = content.projects.findIndex((project) => project.slug === slug || project.aliases?.includes(slug));
  const project = content.projects[projectIndex];

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
        {project.sections.map((section) => (
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
