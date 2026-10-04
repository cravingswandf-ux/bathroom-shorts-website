import './style.css';

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="site">
    <header class="navbar">
      <a class="brand" href="#home">BATHROOM SHORTS</a>

      <nav>
        <a href="#privacy">Privacy</a>
        <a href="#guidelines">Community Guidelines</a>
        <a href="#child-safety">Child Safety</a>
        <a href="#delete-account">Delete Account</a>
      </nav>
    </header>

    <main>
      <section id="home" class="hero">
        <div class="hero-content">
          <p class="eyebrow">Sven Tech</p>
          <h1>BATHROOM<br><span>SHORTS</span></h1>

          <p class="hero-description">
            Anonymous expression. Real thoughts. A safer community built
            around responsible anonymity.
          </p>

          <div class="hero-buttons">
            <a class="button primary" href="#privacy">
              Privacy Policy
            </a>

            <a class="button secondary" href="#guidelines">
              Community Guidelines
            </a>
          </div>
        </div>
      </section>

      <section id="privacy" class="policy-section">
        <div class="section-label">01 / PRIVACY</div>

        <div class="section-content">
          <h2>Privacy Policy</h2>

          <p class="updated">
            Last updated: October 2026
          </p>

          <p>
            BATHROOM SHORTS is operated by Sven Tech. This Privacy Policy
            explains how information is handled when you use BATHROOM SHORTS.
          </p>

          <h3>1. About BATHROOM SHORTS</h3>
          <p>
            BATHROOM SHORTS is an anonymous social application designed for
            people aged 18 and older. Users can create an anonymous username
            and share stories, community posts, text messages and voice
            messages.
          </p>

          <h3>2. Information used for your account</h3>
          <p>
            Your account uses an anonymous username and a password credential.
            Phone numbers and email addresses are not required for account
            authentication.
          </p>

          <h3>3. User content</h3>
          <p>
            Depending on how you use the app, we may process stories,
            community posts, text messages, voice messages, reactions,
            reports and blocks.
          </p>

          <h3>4. Temporary content</h3>
          <p>
            Stories and community content are designed to be temporary.
            Messages are configured to expire after 24 hours. Expired message
            data and associated voice files are removed according to the
            application's retention system.
          </p>

          <h3>5. Voice messages</h3>
          <p>
            If you send a voice message, the audio file is temporarily stored
            so that it can be delivered through the messaging system. Voice
            files are removed when the associated message expires or when
            required by account deletion.
          </p>

          <h3>6. Safety and moderation</h3>
          <p>
            Reports, blocks and moderation-related information may be
            processed to protect users, investigate violations and enforce
            our Community Guidelines.
          </p>

          <h3>7. Account deletion</h3>
          <p>
            You can request deletion of your BATHROOM SHORTS account through
            the application. Account deletion removes the account and
            associated application data according to our deletion process.
          </p>

          <h3>8. Device permissions</h3>
          <p>
            BATHROOM SHORTS requests microphone access when voice messaging
            requires it. Internet access is required to communicate with the
            application's servers.
          </p>

          <h3>9. Information we do not intentionally request</h3>
          <p>
            BATHROOM SHORTS does not require a phone number, email address,
            real name, profile photograph or location for account creation.
          </p>

          <h3>10. Service providers</h3>
          <p>
            BATHROOM SHORTS uses infrastructure providers for application
            hosting and database services. Technical information may be
            processed by these providers as necessary to operate and secure
            the service.
          </p>

          <h3>11. Advertising and analytics</h3>
          <p>
            The current application does not intentionally include advertising
            or third-party analytics SDKs.
          </p>

          <h3>12. Security</h3>
          <p>
            We use reasonable technical and organizational measures designed
            to protect account credentials and application data. No internet
            service can guarantee absolute security.
          </p>

          <h3>13. Children's safety</h3>
          <p>
            BATHROOM SHORTS is intended for users aged 18 and older. Sexual
            exploitation of minors, child sexual abuse material, grooming and
            sexual solicitation of minors are strictly prohibited.
          </p>

          <h3>14. Contact</h3>
          <p>
            For privacy or safety questions, contact:
          </p>

          <p>
            <a class="email" href="mailto:bathroomshorts@gmail.com">
              bathroomshorts@gmail.com
            </a>
          </p>
        </div>
      </section>

      <section id="guidelines" class="policy-section dark-section">
        <div class="section-label">02 / SAFETY</div>

        <div class="section-content">
          <h2>Community Guidelines</h2>

          <p class="updated">
            BATHROOM SHORTS Community Standards
          </p>

          <h3>1. Be respectful</h3>
          <p>
            Treat other people with basic respect. Disagreement is allowed;
            targeted abuse is not.
          </p>

          <h3>2. No harassment</h3>
          <p>
            Do not repeatedly target, intimidate, threaten, humiliate or
            harass another person.
          </p>

          <h3>3. Protect privacy</h3>
          <p>
            Do not expose another person's private or personal information.
          </p>

          <h3>4. No doxxing</h3>
          <p>
            Never publish addresses, private contact information, passwords
            or other sensitive personal information belonging to another
            person.
          </p>

          <h3>5. Keep stories genuine</h3>
          <p>
            Do not use the platform to intentionally deceive, impersonate or
            manipulate others.
          </p>

          <h3>6. No threats</h3>
          <p>
            Threats of violence or credible threats against another person
            are prohibited.
          </p>

          <h3>7. No illegal or dangerous content</h3>
          <p>
            Do not use BATHROOM SHORTS to facilitate illegal activities or
            encourage dangerous acts.
          </p>

          <h3>8. No sexual exploitation</h3>
          <p>
            Sexual content involving minors, exploitation, grooming, sexual
            solicitation of minors, or non-consensual intimate content is
            strictly prohibited.
          </p>

          <h3>9. Child safety</h3>
          <p>
            Child sexual abuse material and any sexualization or exploitation
            of minors are prohibited. Reports involving child safety are
            treated as serious safety matters and may result in immediate
            removal, account action and reporting to appropriate authorities
            where required.
          </p>

          <h3>10. Report problems</h3>
          <p>
            If you encounter content or behavior that violates these
            guidelines, use the reporting tools available in the app.
          </p>

          <h3>11. Use anonymity responsibly</h3>
          <p>
            Anonymity is provided for expression, not for abuse, harassment,
            exploitation or illegal activity.
          </p>

          <h3>12. Enforcement</h3>
          <p>
            Violations may result in content removal, restrictions,
            suspension or permanent account termination.
          </p>

          <h3>13. Temporary stories</h3>
          <p>
            Stories are designed to disappear after 24 hours, but users must
            still follow all Community Guidelines while posting them.
          </p>

          <p class="safety-contact">
            Safety contact:
            <a class="email" href="mailto:bathroomshorts@gmail.com">
              bathroomshorts@gmail.com
            </a>
          </p>
        </div>
      </section>

      <section id="child-safety" class="policy-section">
        <div class="section-label">03 / CHILD SAFETY</div>

        <div class="section-content">
          <h2>Child Safety Standards</h2>

          <p>
            BATHROOM SHORTS is an 18+ service. Children and users under 18
            are not permitted to use the application.
          </p>

          <h3>Zero tolerance</h3>
          <p>
            BATHROOM SHORTS has zero tolerance for child sexual abuse and
            exploitation.
          </p>

          <p>
            Prohibited material and behavior includes child sexual abuse
            material, grooming, sexual solicitation of minors, sexualized
            content involving minors and attempts to facilitate the sexual
            exploitation of children.
          </p>

          <h3>Reporting</h3>
          <p>
            Users should report suspected child sexual exploitation or
            dangerous activity immediately through the application's reporting
            tools or by contacting our safety team.
          </p>

          <p>
            <a class="email" href="mailto:bathroomshorts@gmail.com">
              bathroomshorts@gmail.com
            </a>
          </p>

          <h3>Enforcement</h3>
          <p>
            Content or accounts violating child-safety standards may be
            removed or terminated. Serious matters may be escalated to
            appropriate authorities when legally required or appropriate.
          </p>
        </div>
      </section>

      <section id="delete-account" class="policy-section dark-section">
        <div class="section-label">04 / ACCOUNT</div>

        <div class="section-content">
          <h2>Delete Your Account</h2>

          <p>
            You can delete your BATHROOM SHORTS account directly from the
            application.
          </p>

          <h3>How to delete your account</h3>

          <ol>
            <li>Open BATHROOM SHORTS.</li>
            <li>Open your Profile.</li>
            <li>Open Settings.</li>
            <li>Select Delete Account.</li>
            <li>Confirm the deletion.</li>
          </ol>

          <p>
            Account deletion removes your account and associated application
            data according to the application's deletion process.
          </p>

          <p>
            If you cannot access the application, contact:
          </p>

          <p>
            <a class="email" href="mailto:bathroomshorts@gmail.com">
              bathroomshorts@gmail.com
            </a>
          </p>
        </div>
      </section>
    </main>

    <footer>
      <div>
        <strong>BATHROOM SHORTS</strong>
        <span>by Sven Tech</span>
      </div>

      <div class="footer-links">
        <a href="#privacy">Privacy</a>
        <a href="#guidelines">Guidelines</a>
        <a href="#child-safety">Child Safety</a>
        <a href="#delete-account">Delete Account</a>
      </div>

      <p>© 2026 Sven Tech. All rights reserved.</p>
    </footer>
  </div>
`;