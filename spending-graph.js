const spendingData = [
    { category: "Food and Dining", spending: 2005.0, color: "tomato" },
    { category: "Auto and Transport", spending: 1471.31, color: "seagreen" },
    { category: "Shopping", spending: 892.86, color: "orchid" },
    { category: "Bills and Utilities", spending: 531.6, color: "coral" },
    { category: "Mortgage", spending: 1646.0, color: "royalblue" },
    { category: "Entertainment", spending: 179.52, color: "gold" }
  ];
  
  const graphContainer = document.querySelector(".graph-container");
  
  const resetButton = document.querySelector(".reset-button");
  
  function drawGraph() {
    const graphHeight = 400;
    const graphWidth = 600;
    const numberOfYTicks = 5;
  
    const maxYValue = Math.max(...spendingData.map(data => data.spending));
  
    const yScale = graphHeight / maxYValue;
  
    const tickGap = graphHeight / numberOfYTicks;
  
    for (let i = 0; i <= numberOfYTicks; i++) {
      const ytick = document.createElement("div");
      ytick.setAttribute("class", "ytick");
  
      const ytext = document.createElement("span");
      ytext.setAttribute("class", "ytext");
      ytext.innerText = i * tickGap / yScale;
  
      ytick.appendChild(ytext);
  
      ytick.style.top = graphHeight - i * tickGap;
  
      graphContainer.appendChild(ytick);
    }
  
    spendingData.forEach(data => {
  
      const bar = document.createElement("div");
      const xtick = document.createElement("div");
      xtick.setAttribute("class", "xtick");
  
      const xtext = document.createElement("div");
      xtext.setAttribute("class", "xtext");
  
      xtext.innerText = data.category;
      xtick.appendChild(xtext);
  
      const barHeight = data.spending * yScale;
  
      bar.setAttribute("class", "bar");
      bar.style.height = barHeight + "px";
      bar.style.background = data.color;
      bar.appendChild(xtick);
  
      graphContainer.appendChild(bar);
    });
  }
  
  function resetGraph() {
    const bars = document.querySelectorAll(".bar");
  
    [...bars].forEach(bar => (bar.style.height = 0));
  }
  
  drawGraph();
  
  resetButton.addEventListener("click", () => {
    resetGraph();
  });