AFRAME.registerComponent("cursor-listener",{
    schema: {
        selectedItemId: { default: "", type: "string" },
    },  
    init: function () {
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
    },
    handleComicsListState: function () {
        const id = this.el.getAttribute("id");
        const placesId = ["superman", "spiderman", "captain-aero", "outer-space"];
        if (placesId.includes(id)) {
          const placeContainer = document.querySelector("#places-container");
          placeContainer.setAttribute("cursor-listener", {
            selectedItemId: id,
          });
          this.el.setAttribute("material", {
            color: "#1565c0",
            opacity: 1,
          });
        }
      },
      handleMouseEnterEvents: function () {
        // Mouse Enter Events
        this.el.addEventListener("mouseenter", () => {
          this.handleComicsListState();
          console.log("orange")
        });
      },
      handleMouseLeaveEvents: function () {
        // Mouse Leave Events
        this.el.addEventListener("mouseleave",()=>{
          const {selectedItemId}= this.data
          if(selectedItemId){
            const el = document.querySelector(`#${selectedItemId}`)
            const id = el.getAttribute("id")
            if(id==selectedItemId){
              el.setAttribute("material", {color:"#fff", opacity:1})
              console.log("blue")
            }
    
          }
        });
      },
})