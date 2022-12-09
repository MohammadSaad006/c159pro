AFRAME.registerComponent("info-banner", {
    schema: {
      itemId: { default: "", type: "string" },
    },
    update: function () {
      this.createBanner();
    },
    createBanner: function () {
      postersInfo = {
        spiderman: {
          banner_url: "./assets/banner-img/sjbanner.png",
          title: "Marvel Comics",
          released_year: "1939",
          description:
            "When Spider-Man first appeared in the early 1960s, teenagers in superhero comic books were usually relegated to the role of sidekick to the protagonist. The Spider-Man series broke ground by featuring Peter Parker, a high school student from Queens, New York, as Spider-Man's secret identity, whose ",
        },
        superman: {
          banner_url: "./assets/banner-img/new-52-superman.jpg",
          title: "DC comics",
          released_year: "1938",
          description:
            "Superman is an ongoing American comic book series featuring the DC Comics superhero Superman as its main protagonist. Superman began as one of several anthology features in the National Periodical Publications comic book Action Comics #1 in June 1938.",
        },
        "captain-aero": {
          banner_url: "./assets/banner-img/AERO_comic.jpg",
          title: "captain-aero",
          released_year: "1942",
          description:
            "Captain Aero Comics is a comic book from the Golden Age of Comics, originally published by Helnit Publishing and acquired by Holyoke Publishing in 1942.[1] Issue #1 was published in December 1941, and it ran through issue #26 (August 1946).",
        },
        "the-new-Warriors-Comics": {
          banner_url: "./assets/banner-img/warriors.jpg",
          title: "the-new-Warriors-Comics",
          released_year: "1989",
          description:
            "The New Warriors is a fictional superhero team appearing in American comic books published by Marvel Comics. They traditionally consisted of teenage and young adult heroes, and were often seen to serve as a junior counterpart to The Avengers in much the same way that the New Mutants/X-Force did with the X-Men.",
        },
      };
      const { itemId } = this.data;

      const fadeBackgroundEl = document.querySelector("#fadeBackground");
  
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("id", `${itemId}-banner`);
  
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.9,
        height: 1,
      });
  
      entityEl.setAttribute("material", { color: "#000" });
      entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });
  
      const item = postersInfo[itemId];
      console.log(postersInfo)
      const imageEl = this.createImageEl(item);
      const titleEl = this.createTitleEl(item);
      const descriptionEl = this.createDescriptionEl(item);
  
      entityEl.appendChild(imageEl);
      entityEl.appendChild(titleEl);
      entityEl.appendChild(descriptionEl);
  
      fadeBackgroundEl.appendChild(entityEl);
    },
    createImageEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.85,
        height: 0.4,
      });
      entityEl.setAttribute("material", { src: item.banner_url });
      entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
      return entityEl;
    },
    createTitleEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        width: 1.2,
        height: 2,
        color: "#fff",
        value: `${item.title} (${item.released_year})`,
      });
      entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
      return entityEl;
    },
    createDescriptionEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        width: 0.75,
        height: 2,
        color: "#fff",
        wrapCount: "40",
        value: item.description,
      });
      entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
      return entityEl;
    },
  });
  