const scents = {
  "items": [
    {
      "name": "Pure Natural Honey",
      "description": "Ibn e Kabir Naturals Pure Natural Honey is 100% pure, raw, and unprocessed honey, carefully sourced from natural beehives to preserve its original taste, aroma, and nutritional value. Free from additives, sugar syrup, preservatives, and artificial flavors, our honey delivers nature’s goodness just as it is. \
       \
      This golden, nutrient-rich honey is packed with natural enzymes, antioxidants, vitamins, and minerals, making it a wholesome addition to your daily lifestyle. Whether used as a natural sweetener, a health booster, or a traditional remedy, Ibn e Kabir Naturals Pure Natural Honey ensures purity, quality, and trust in every drop. \
       \
      Key Benefits: \
 \
✔ 100% Pure & Natural \
✔ No Added Sugar or Chemicals \
✔ Rich in Antioxidants & Nutrients \
✔ Supports Immunity & Digestion \
✔ Boosts Energy Naturally \
✔ Helps Soothe Cough & Sore Throat \
✔ Improves Overall Wellness \
 \
Uses: \
 \
• Add to warm water or milk for daily health \
• Use as a natural sweetener in tea, coffee, or juices \
• Spread on bread, toast, or pancakes \
• Mix with lemon or herbal remedies \
• Use in skincare and home remedies \
 \
Quality Assurance: \
 \
• Raw & Unprocessed \
• Hygienically Packed \
• Sourced from Trusted Beekeepers \
• Lab-tested for Purity \
 \
Storage Instructions: \
 \
Store in a cool, dry place away from direct sunlight. Natural crystallization may occur—this is a sign of purity. Place the jar in warm water to liquefy if needed. \
 \
Brand Promise: \
 \
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
      "description": "",
      "image": "images/shilajit.png",
      "available": false,
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
