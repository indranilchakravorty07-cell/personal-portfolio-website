import "./styles/AboutSection.css";

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <div className="about-image-col">
          <img
            src="https://images.framedbyabard.com/about.jpeg"
            alt="Traveller on a mountain trail"
            className="about-img"
          />
        </div>
        <div className="about-text-col">
          <span className="about-label">About Me</span>
          <h2>A traveller with a camera and too many notebooks</h2>
          <p>
            Indranil has been a passionate wildlife photographer for more than
            25 years and travelled widely for the same. After completing his
            BTech ( Mechanical) and MBA ( Finance) from premier institutes in
            India, he spent nearly 30 years in senior positions in Investment
            Banking primarily in ICICI Securities and Nomura India. His last
            position held was Head of Institutional and Corporate Sales in
            Nomura based out of Mumbai. However, around a year back, concerned
            with the threats facing wildlife , he gave up his corporate job and
            took up wildlife conservation full time. Indranil is a strong
            believer in the tenet of “Conservation through Education” and
            believes photography is the best mode of educating the common
            person. In the last one year he has criss crossed across the globe,
            chronicling, documenting and photographing wildlife in their natural
            habitat.
          </p>
          <p>
            He is presently working on two projects: - Writing a book named “Cat
            Catcher Chronicles “ which endeavours to photograph and document the
            challenges faced by each of the 40 species of wild cats in their
            natural habitat.
          </p>
          <p>
            Designing and building a website named #Redlistrevival where again
            he would look to photograph, document and educate the common people
            of each of the bird and animal species termed as “Critically
            Endangered “ in the IUCN Red List. He hopes that by knowing more
            about these species through his website, the local people will take
            more interest in conserving the local wildlife Both these projects
            are in advance stages of planning
          </p>
        </div>
      </div>
    </section>
  );
}
