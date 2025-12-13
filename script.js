const scents = {
  "items": [
    {
      "name": "Pure Natural Honey",
      "description": "Ibn e Kabir Naturals Pure Natural Honey is 100% pure, raw, and unprocessed honey, carefully sourced from natural beehives to preserve its original taste, aroma, and nutritional value. Free from additives, sugar syrup, preservatives, and artificial flavors, our honey delivers nature’s goodness just as it is.<br>\
      <br>\
      This golden, nutrient-rich honey is packed with natural enzymes, antioxidants, vitamins, and minerals, making it a wholesome addition to your daily lifestyle. Whether used as a natural sweetener, a health booster, or a traditional remedy, Ibn e Kabir Naturals Pure Natural Honey ensures purity, quality, and trust in every drop.<br>\
      <br>\
      <b>Key Benefits:</b><br>\
<br>\
✔ 100% Pure & Natural<br>\
✔ No Added Sugar or Chemicals<br>\
✔ Rich in Antioxidants & Nutrients<br>\
✔ Supports Immunity & Digestion<br>\
✔ Boosts Energy Naturally<br>\
✔ Helps Soothe Cough & Sore Throat<br>\
✔ Improves Overall Wellness<br>\
<br>\
<b>Uses:</b><br>\
<br>\
• Add to warm water or milk for daily health<br>\
• Use as a natural sweetener in tea, coffee, or juices<br>\
• Spread on bread, toast, or pancakes<br>\
• Mix with lemon or herbal remedies<br>\
• Use in skincare and home remedies<br>\
<br>\
<b>Quality Assurance:</b><br>\
<br>\
• Raw & Unprocessed<br>\
• Hygienically Packed<br>\
• Sourced from Trusted Beekeepers<br>\
• Lab-tested for Purity<br>\
<br>\
<b>Storage Instructions:</b><br>\
<br>\
Store in a cool, dry place away from direct sunlight. Natural crystallization may occur—this is a sign of purity. Place the jar in warm water to liquefy if needed.<br>\
<br>\
<b>Brand Promise:</b><br>\
<br>\
Ibn e Kabir Naturals is committed to delivering pure, authentic, and natural products inspired by tradition and trusted by nature.",
      "image": "images/honey.png",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "450 PKR" },
        { "quantity": "6ml", "price": "800 PKR" },
        { "quantity": "12ml", "price": "1,450 PKR" }
      ]
    },
    {
      "name": "Pure Natural Shilajit",
      "description": "Ibn e Kabir Naturals Pure Natural Shilajit is a premium-quality, 100% pure and naturally sourced mineral-rich resin, carefully purified to preserve its original potency and therapeutic properties. Harvested from high-altitude mountain regions, our Shilajit is free from chemicals, fillers, preservatives, and artificial additives, delivering nature’s strength in its most authentic form.<br>\
<br>\
This powerful natural substance is rich in fulvic acid, humic acid, and over 80 essential minerals that support energy, stamina, and overall vitality. Traditionally used in herbal and Ayurvedic wellness systems, Pure Natural Shilajit helps rejuvenate the body, enhance physical performance, and promote long-term health and balance.<br>\
<br>\
<b>Key Benefits:</b><br>\
<br>\
✔ 100% Pure & Natural Shilajit Resin<br>\
✔ Rich in Fulvic Acid & Essential Minerals<br>\
✔ Boosts Energy, Strength & Stamina<br>\
✔ Supports Mental Focus & Clarity<br>\
✔ Helps Improve Immunity & Metabolism<br>\
✔ Promotes Physical & Overall Vitality<br>\
✔ Traditionally Used for Rejuvenation<br>\
<br>\
<b>Uses / How to Consume:</b><br>\
<br>\
• Dissolve a pea-sized amount in warm water or milk<br>\
• Can be taken once or twice daily as recommended<br>\
• Suitable for daily wellness and strength support<br>\
<br>\
(Consult a healthcare professional before use if you have any medical condition.)<br>\
<br>\
<b>Quality Assurance:</b><br>\
<br>\
• Naturally Sourced & Carefully Purified<br>\
• No Chemicals, Fillers, or Additives<br>\
• Hygienically Packed<br>\
• Quality-Checked for Purity and Potency<br>\
<br>\
<b>Storage Instructions:</b><br>\
<br>\
Store in a cool, dry place away from direct sunlight. Keep the container tightly closed. Avoid contact with moisture.<br>\
<br>\
<b>Brand Promise:</b><br>\
<br>\
Ibn e Kabir Naturals is committed to delivering pure, authentic, and natural wellness products inspired by tradition and powered by nature.",
      "image": "images/shilajit.png",
      "available": true,
      "show_price": false,
      "prices": [
        { "quantity": "3ml", "price": "350 PKR" },
        { "quantity": "6ml", "price": "700 PKR" },
        { "quantity": "12ml", "price": "1,300 PKR" }
      ]
    },
  ]
};

renderProducts(scents.items);

function renderProducts(items) {
  const container = document.querySelector("#products");
  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="product-details">
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <div class="bottom-section">
          ${item.show_price ? renderPrices(item.prices) : ""}
          <div class="availability ${item.available ? 'available' : 'coming'}">
            ${item.available ? 'Available' : 'Coming Soon'}
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderPrices(prices) {
  return `<div class="price-list">
    ${prices.map(p => `<div>${p.quantity} - ${p.price}</div>`).join('')}
  </div>`;
}
