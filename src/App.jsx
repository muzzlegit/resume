import styles from "./App.module.css";
import { data } from "./data.js";

function App() {
  return (
    <div className={styles.page}>
      <div className={styles.resume}>
        {/* ── HEADER ── */}
        <header className={styles.header}>
          <div className={styles.headerBg} />

          {/* Про себе + статистика */}
          <section>
            <div className={styles.headerLeft}>
              <div className={styles.badgeRow}></div>
              <h1 className={styles.name}>{data.імʼя}</h1>
              <p className={styles.title}>{data.посада}</p>
              <p className={styles.subtitle}>{data.спеціалізація}</p>
            </div>
            <p className={styles.sectionLabel}>Про себе</p>
            <p className={styles.summary}>{data.про}</p>
            <div className={styles.statsRow}>
              {data.статистика.map((с, і) => (
                <div key={і} className={styles.statCard}>
                  <div className={styles.statNum}>{с.число}</div>
                  <div className={styles.statLabel}>{с.підпис}</div>
                </div>
              ))}
            </div>
          </section>

          <div className={styles.contacts}>
            <img src="./photo.webp" className={styles.photo} />
            {data.контакти.map((к, і) =>
              к.href ? (
                <a key={і} href={к.href} className={styles.contactItem}>
                  <span className={styles.contactIcon}>{к.іконка}</span>
                  {к.текст}
                </a>
              ) : (
                <span key={і} className={styles.contactItem}>
                  <span className={styles.contactIcon}>{к.іконка}</span>
                  {к.текст}
                </span>
              )
            )}
          </div>
        </header>

        {/* ── BODY ── */}
        <div className={styles.body}>
          {/* MAIN */}
          <main className={styles.main}>
            {/* Досвід */}
            <section>
              <p className={styles.sectionLabel}>Досвід роботи</p>
              <div className={styles.expList}>
                {data.досвід.map((e, i) => (
                  <div key={i} className={styles.expItem}>
                    <div className={styles.expDot} />
                    <div className={styles.expHeader}>
                      <span className={styles.expRole}>{e.посада}</span>
                      <span className={styles.expPeriod}>{e.період}</span>
                    </div>
                    <p className={styles.expCompany}>{e.компанія}</p>
                    <p className={styles.expInit}>Основні обов'язки:</p>
                    <ul className={styles.expBullets}>
                      {e.пункти.map((p, j) => (
                        <li key={j}>{p}</li>
                      ))}
                    </ul>
                    {e.ініціативи.length ? (
                      <>
                        <p className={styles.expInit}>Додатково:</p>
                        <ul className={styles.expBullets}>
                          {e.ініціативи.map((p, j) => (
                            <li key={j}>{p}</li>
                          ))}
                        </ul>
                      </>
                    ) : null}

                    <div className={styles.expTags}>
                      {e.теги.map((t, j) => (
                        <span key={j} className={styles.expTag}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* SIDEBAR */}
          <aside className={styles.sidebar}>
            {/* Освіта */}
            <section>
              <p className={styles.sectionLabel}>Освіта</p>
              {data.освіта.map((о, і) => (
                <div key={і} className={styles.eduItem}>
                  <p className={styles.eduDegree}>{о.ступінь}</p>
                  <p className={styles.eduSchool}>{о.заклад}</p>
                  <p className={styles.eduYear}>{о.рік}</p>
                </div>
              ))}
            </section>

            {/* Мови */}
            <section>
              <p className={styles.sectionLabel}>Мови</p>
              <div className={styles.langList}>
                {data.мови.map((м, і) => (
                  <div key={і} className={styles.langItem}>
                    <span className={styles.langName}>{м.мова}</span>
                    <span className={styles.langLevel}>{м.рівень}</span>
                  </div>
                ))}
              </div>
            </section>
            {/* Додаткові Навички */}
            <section>
              <p className={styles.sectionLabel}>Додаткові навички</p>
              <p className={styles.skillSubTitle}>Знання веб-розробки</p>
              {data.додаткові.map((нг, і) => (
                <div key={і} className={styles.skillGroup}>
                  <p className={styles.skillGroupName}>{нг.група}</p>
                  <div className={styles.skillPills}>
                    {нг.пункти.map((н, j) => (
                      <span
                        key={j}
                        className={j < 2 ? styles.pillAccent : styles.pill}
                      >
                        {н}
                      </span>
                    ))}
                  </div>
                  <div className={styles.skillPills}>
                    {нг.технології.map((н, j) => (
                      <span
                        key={j}
                        className={j < 2 ? styles.pillAccent : styles.pill}
                      >
                        {н}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;
