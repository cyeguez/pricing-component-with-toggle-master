const containerSwitch = document.querySelector("label");
let globalData = "";
const btnSwitch = document.getElementById("btnSwitch");
const prices = document.querySelector(".price");
const containerCards = document.querySelector(".container-cards");
const url = "./prices.json";
let state = false;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    globalData = data;
    render(globalData);
  })
  .catch((error) => {
    // Manejo de errores
    console.error("Error al cargar el archivo JSON:", error);
  });

btnSwitch.addEventListener("input", (e) => {
  state = e.target.checked;
  render(globalData, state);
});

const render = (data, state) => {
  let template = "";

  data.forEach((element, index) => {
    let backgroud =
      index != 1
        ? "bg-Very-Light-Grayish-Blue text-bg-Primary"
        : "bg-Primary text-Very-Light-Grayish-Blue";
    let colorButton =
      index != 1
        ? "bg-Primary text-Very-Light-Grayish-Blue "
        : "bg-Very-Light-Grayish-Blue text-[#696FDD]";
      let heingLg= index != 1 ? "lg:h-[454px] lg:mt-[1.5rem]" : "lg:h-[499px]"; 

    template += `
    
    <article
          class="card ${backgroud} rounded-xl pt-9 px-6 text-center max-w-custom-xs mx-auto shadow-2xl  mb-8  lg:m-0 lg:w-[346px] ${heingLg}"
        >
          <p class="font-semibold text-sm lg:pt-[36px] lg:text-[1.125em] lg:mb-[40px] ">${
      element.category
    }</p>
          <p class="text-5xl font-bold relative price">        
            <span class="text-3xl font-bold top-2 phone:left-0 phone-xs:left-4 md:left-6 -top-.5 absolute lg:left-8 lg:text-[40px]  ">
            &dollar; 
            </span>
            ${!state ? element.priceAnnually : element.priceMonthly}
          </p>
    
          <p
            class="font-semibold border-t-[1px] border-Light-Grayish-Blue p-4 "
          >
            ${element.storage} Storage
          </p>
          <p
            class="font-semibold border-t-[1px] border-Light-Grayish-Blue  p-4"
          >
            ${element.user} Users Allowed
          </p>
          <p
            class="font-semibold border-y-[1px] border-Light-Grayish-Blue  p-4"
          >
            Send up to ${element.sentCapacity} GB
          </p>
          <button
            type="button"
            class="my-4  ${colorButton} font-semibold uppercase w-full py-3 text-xs text-center rounded-md cursor-pointer"
          >
            Learn More
          </button>
        </article>    
        `;
  });
  containerCards.innerHTML = template;
};
