<template>
  <div class="resume">
    <BackToSite class="noprint" />
    <Heading />
    <main>
      <Section title="Education" class="first">
        <Item
          title="BSc Computer Science"
          subtitle="The University of Sheffield"
          date="2018 — Present"
        >
          <p>
            Average First Class performance to date, including modules such as
            Systems Design (82%) and Web & Internet Technologies (90%)
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
            In a team responsible for rebuilding the test suite behind company
            wide tooling using SVUnit, improving test quality and consistency.
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
            Taught first & second year students Haskell and Web Technologies in
            1-to-1 sessions.
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
            student Hackathon, two years running. Organised hackathons both
            online and in-person, attended by hundreds of students.
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
        <Item title="Picto" date="Nov 2019 — Apr 2020">
          Released a real-time chat service built with Vue and Golang. Leverages
          an automatic deployment pipeline and an agile model.
        </Item>
        <Item title="BeautiSearch" date="Feb 2018 — Present">
          A customisable and performant homepage for your browser, built with
          Svelte.
        </Item>
      </Section>
      <Section title="Skills">
        <p>
          <strong>Languages:</strong> JavaScript, HTML, CSS, SystemVerilog,
          Java, C++, Haskell, Python, Ruby.
        </p>
        <p>
          <strong>Frameworks:</strong> Vue, Nuxt, Svelte, Gridsome, Node,
          Express, GraphQL.
        </p>
        <p>
          <strong>Tooling & Systems:</strong> Linux, Git, Rollup, Webpack,
          Cloudflare, Gerrit, Heroku, PostgreSQL.
        </p>
      </Section>
    </main>
  </div>
</template>

<script>
import BackToSite from "@/components/resume/BackToSite.vue";
import Heading from "@/components/resume/Heading.vue";
import Section from "@/components/resume/Section.vue";
import Item from "@/components/resume/Item.vue";

export default {
  components: {
    BackToSite,
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
  background: white;
  font-size: 14px !important;
  
  main {
    padding: 2 * $resume-unit;
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

  .noprint {
    display: none;
  }
}

.first {
  padding-top: 0 !important;
}
</style>
