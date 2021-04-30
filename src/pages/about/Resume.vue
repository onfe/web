<template>
  <div class="resume">
    <Heading />
    <main>
      <Section title="Education" class="first">
        <Item
          title="BSc Computer Science"
          subtitle="The University of Sheffield"
          date="2018 — Present"
        >
          <p>
            First Class performance to date, including modules such as
            Systems Design (82%) and Web & Internet Technologies (90%).
          </p>
        </Item>
        <Item title="Havering Sixth Form College" date="2016 — 2018">
          <p>
            AAB at A-Level in Computer Science, Chemistry and Mathematics
            respectively.
          </p>
        </Item>
      </Section>
      <Section title="Experience">
        <Item
          title="Design & Verification Intern"
          subtitle="Arm"
          date="Jun 2020 — Sep 2020"
        >
          <p>
            Responsible for rebuilding the test suite behind company-wide
            tooling using SVUnit, improving test quality and consistency.
            The revitalised test suite has driven an increase in unit test usage
            across teams.
          </p>
          <p>
            Designed & implemented a SystemVerilog testbench to enforce parity
            correctness across interfaces.
          </p>
        </Item>
        <Item
          title="Full-Stack Developer"
          subtitle="unPhone"
          date="Apr 2019 — Present"
        >
          <p>
            Developed a Vue.js Aquaponics dashboard to suit research
            requirements, used in undergraduate projects, powered by an
            extensible GraphQL API.
          </p>
        </Item>
        <Item
          title="Teaching Assistant"
          subtitle="The University of Sheffield"
          date="Sep 2020 — Present"
        >
          <p>
            Taught first & second-year students Haskell, Software Engineering and Web Technologies.
          </p>
        </Item>
      </Section>
      <Section title="Volunteering">
        <Item
          title="Treasurer & Organiser"
          subtitle="HackSheffield"
          date="Apr 2019 — Present"
        >
          <p>
            Elected Treasurer in the small team behind Sheffield's largest
            student Hackathon, two years running. Organised widely attended hackathons both
            online and in-person.
          </p>
        </Item>
        <Item
          title="Campus Expert"
          subtitle="GitHub Education"
          date="Jun 2020 — Present"
        >
          Underwent training to better support my local community of hackers and
          makers.
        </Item>
        <Item
          title="Instructor"
          subtitle="Code First: Girls"
          date="Mar 2020 — Apr 2020"
        >
          Volunteered to instruct a course in front-end development. Taught
          HTML, CSS and JavaScript to young women with no prior programming
          experience.
        </Item>
      </Section>
      <Section title="Projects">
        <Item title="Popcat" date="Dec 2020 — Present">
          A viral, competitive, browser-based clicker game.
          Built on Golang with a Vue front-end. Sharded architecture for scalability, handling thousands of concurrent users.
        </Item>
        <Item title="Picto" date="Nov 2019 — Apr 2020">
          A real-time chat service built with Vue and Go. Full PWA with automated deployment.
        </Item>
      </Section>
      <Section title="Skills">
        <p>
          <strong>Languages:</strong> JavaScript, HTML, CSS, SystemVerilog,
          Java, C++, Haskell, Python, Ruby.
        </p>
        <p>
          <strong>Frameworks:</strong> Vue, Nuxt, Gridsome, Svelte, Node,
          Express, GraphQL.
        </p>
        <p>
          <strong>Tooling & Systems:</strong> Linux, Git, Webpack, Gerrit,
          Docker, Redis, PostgreSQL, MongoDB.
        </p>
      </Section>
    </main>
  </div>
</template>

<script>
import Heading from "@/components/resume/Heading.vue";
import Section from "@/components/resume/Section.vue";
import Item from "@/components/resume/Item.vue";

export default {
  components: {
    Heading,
    Section,
    Item
  },
  metaInfo() {
    const title = "Résumé";
    return {
      title: title,
      meta: [{ name: "og:title", key: "og:title", content: title }]
    };
  }
};
</script>

<style lang="scss" scoped>
.resume {
  background: var(--colour-background);
  font-size: 14px !important;

  main {
    padding: 2 * $resume-unit;
    max-width: 297mm;
    margin: 0 auto;
  }
}

@media print {
  @page {
    size: A4;
    margin: 0;
  }

  .resume {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
  }
}

.first {
  padding-top: 0 !important;
}
</style>
