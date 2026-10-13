const PRODUCTS = [
    {
        id: "black-ivory-printed-maxi-dress",
        name: "Black and Ivory Printed Maxi Dress",
        price: 1199,
        image: "images/dress3.jpg",
        imageAlt: "Black and ivory printed maxi dress with short sleeves",
        description: "A full-length black dress with an ivory print, short sleeves, and a flowing skirt.",
        categories: ["printed", "western"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black and Ivory"],
        stock: 8
    },
    {
        id: "western-dress",
        name: "Pastel Print Shirt and Denim Jeans",
        price: 999,
        image: "images/dress4.jpg",
        imageAlt: "Pastel printed short-sleeve shirt paired with blue jeans",
        description: "A pastel printed short-sleeve shirt styled with blue denim jeans for a casual western look.",
        categories: ["western"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Pastel Print and Blue Denim"],
        stock: 10
    },
    {
        id: "elegant-ethnic-wear",
        name: "Burgundy Printed Lehenga Set",
        price: 3299,
        image: "images/dress1.jpg",
        imageAlt: "Burgundy two-piece lehenga set with a sleeveless blouse and long skirt",
        description: "A burgundy two-piece occasion outfit with a sleeveless blouse and a flared, patterned skirt.",
        categories: ["ethnic", "party"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Burgundy"],
        stock: 5
    },
    {
        id: "party-wear-dress",
        name: "Dusty Rose Pleated Midi Dress",
        price: 4499,
        image: "images/dress2.jpg",
        imageAlt: "Dusty rose sleeveless midi dress with a gathered neckline",
        description: "A dusty rose sleeveless midi dress with a soft gathered neckline and a flowing skirt.",
        categories: ["party", "western"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Dusty Rose"],
        stock: 4
    },
    {
        id: "red-evening-gown",
        name: "Red Sleeveless Evening Gown",
        price: 4999,
        image: "images/dress5.jpg",
        imageAlt: "Red sleeveless floor-length evening gown",
        description: "A bright red sleeveless gown with a fitted upper shape and a full-length flared skirt.",
        categories: ["party"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Red"],
        stock: 3
    },
    {
        id: "plum-off-shoulder-dress",
        name: "Plum Off-Shoulder Evening Dress",
        price: 3799,
        image: "images/dress6.jpg",
        imageAlt: "Model wearing a plum off-shoulder evening dress",
        description: "A deep plum off-shoulder evening dress. The product photo is a close portrait of the outfit.",
        categories: ["party"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Plum"],
        stock: 3
    },
    {
        id: "navy-kurta-printed-dupatta-set",
        name: "Navy Kurta Set with Printed Dupatta",
        price: 2799,
        image: "images/dress7.jpg",
        imageAlt: "Navy kurta and trousers with a beige printed dupatta",
        description: "A navy kurta-and-trouser look styled with a beige printed dupatta.",
        categories: ["kurtis", "ethnic"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Navy and Beige"],
        stock: 5
    },
    {
        id: "red-saree-gold-border",
        name: "Red Saree with Gold Border",
        price: 5999,
        image: "images/dress8.jpg",
        imageAlt: "Red saree with a broad gold border and matching blouse",
        description: "A red saree styled with a matching blouse and a broad gold-toned border.",
        categories: ["saree", "ethnic", "party"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Red and Gold"],
        stock: 3
    },
    {
        id: "blue-denim-pinafore-dress",
        name: "Blue Denim Pinafore Dress",
        price: 1699,
        image: "images/dress9.jpg",
        imageAlt: "Blue denim pinafore midi dress layered over a white T-shirt",
        description: "A button-front blue denim pinafore dress shown layered over a white T-shirt.",
        categories: ["western"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Blue Denim"],
        stock: 7
    },
    {
        id: "blue-denim-button-front-dress",
        name: "Blue Denim Button-Front Dress",
        price: 1899,
        image: "images/dress10.jpg",
        imageAlt: "Blue button-front denim pinafore dress over a white T-shirt",
        description: "A mid-length blue denim pinafore with front buttons, pockets, and a waist tie, layered over a white T-shirt.",
        categories: ["western"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Denim Blue"],
        stock: 6
    },
    {
        id: "printed-kurta-top-jeans",
        name: "Printed Kurta Top with Blue Jeans",
        price: 1499,
        image: "images/dress11.jpg",
        imageAlt: "Dark printed kurta top paired with blue jeans",
        description: "A dark printed long-sleeve kurta top styled with blue jeans.",
        categories: ["kurtis", "western", "printed"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Dark Print and Blue"],
        stock: 8
    },
    {
        id: "navy-embroidered-kurta-set",
        name: "Navy Embroidered Kurta Set",
        price: 2399,
        image: "images/dress12.jpg",
        imageAlt: "Navy button-front kurta and matching trousers with light embroidery",
        description: "A navy button-front kurta and matching trouser set with light decorative embroidery.",
        categories: ["kurtis", "ethnic"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Navy"],
        stock: 5
    },
    {
        id: "black-pinstripe-kurta-set",
        name: "Black Pinstripe Kurta Set",
        price: 1799,
        image: "images/dress13.jpg",
        imageAlt: "Black three-quarter-sleeve pinstripe kurta with matching trousers",
        description: "A black three-quarter-sleeve kurta with vertical light stripes, paired with matching trousers.",
        categories: ["kurtis", "ethnic"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black and Ivory"],
        stock: 6
    },
    {
        id: "black-printed-tunic-jeans",
        name: "Black Printed Tunic with Jeans",
        price: 1399,
        image: "images/dress14.jpg",
        imageAlt: "Black printed three-quarter-sleeve tunic styled with blue jeans",
        description: "A black printed tunic with three-quarter sleeves, shown with blue jeans.",
        categories: ["kurtis", "western", "printed"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black and Ivory"],
        stock: 8
    },
    {
        id: "brown-printed-anarkali-dress",
        name: "Brown Printed Anarkali Dress",
        price: 3299,
        image: "images/dress15.jpg",
        imageAlt: "Long brown and black printed flared Anarkali-style dress",
        description: "A long flared dress with an all-over brown and black print and a contrasting hem.",
        categories: ["ethnic", "party", "printed"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Brown and Black"],
        stock: 4
    },
    {
        id: "ivory-floral-kurta-set",
        name: "Ivory Floral Kurta Set",
        price: 2499,
        image: "images/dress16.jpg",
        imageAlt: "Sleeveless ivory floral kurta with matching trousers",
        description: "A sleeveless ivory kurta with small floral motifs, shown with matching trousers.",
        categories: ["kurtis", "ethnic"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Ivory"],
        stock: 5
    },
    {
        id: "gold-ruffle-evening-gown",
        name: "Gold Ruffle Evening Gown",
        price: 6499,
        image: "images/dress17.jpg",
        imageAlt: "Long gold occasion gown with layered ruffle skirt",
        description: "A long gold-toned occasion gown with a fitted upper section and layered ruffles on the skirt.",
        categories: ["party", "ethnic"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Gold"],
        stock: 3
    },
    {
        id: "magenta-embroidered-sharara-set",
        name: "Magenta Embroidered Sharara Set",
        price: 5499,
        image: "images/dress18.jpg",
        imageAlt: "Magenta embroidered tunic and matching wide-leg sharara trousers with dupatta",
        description: "A magenta embellished tunic and wide-leg sharara set, styled with a matching dupatta.",
        categories: ["ethnic", "party"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Magenta"],
        stock: 4
    },
    {
        id: "red-embroidered-suit-dupatta",
        name: "Red Embroidered Suit Set with Dupatta",
        price: 3999,
        image: "images/dress19.jpg",
        imageAlt: "Red embroidered suit with matching trousers and a sheer dupatta",
        description: "A red long-sleeve suit and matching trousers, styled with a sheer embroidered dupatta.",
        categories: ["ethnic", "party"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Red"],
        stock: 4
    },
    {
        id: "red-embroidered-sharara-set",
        name: "Red Embroidered Sharara Set",
        price: 4599,
        image: "images/dress20.jpg",
        imageAlt: "Red embellished sleeveless tunic and matching wide-leg trousers with dupatta",
        description: "A red embellished sleeveless tunic and matching wide-leg trousers, styled with a sheer dupatta.",
        categories: ["ethnic", "party"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Red"],
        stock: 4
    }
];

const CATEGORY_LABELS = {
    ethnic: "Ethnic",
    western: "Western",
    printed: "Printed",
    party: "Party",
    kurtis: "Kurtis",
    saree: "Sarees"
};

const PRODUCT_ID_ALIASES = {
    "floral-summer-dress": "black-ivory-printed-maxi-dress"
};

const CART_STORAGE_KEY = "styleNestCart";
const DELIVERY_STORAGE_KEY = "styleNestDemoDelivery";
const ORDER_STORAGE_KEY = "styleNestDemoOrder";
const money = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
});

let cart = readCart();

function readCart() {
    try {
        const savedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "[]");
        if (!Array.isArray(savedCart)) return [];

        return savedCart.reduce((validItems, item) => {
            const productId = PRODUCT_ID_ALIASES[item.productId] || item.productId;
            const product = PRODUCTS.find((entry) => entry.id === productId);
            if (!product) return validItems;

            const color = productId === item.productId
                ? item.color
                : (product.colors.includes(item.color) ? item.color : product.colors[0]);
            const hasValidOptions = Number.isInteger(item.quantity) && item.quantity > 0 &&
                item.quantity <= product.stock && product.sizes.includes(item.size) &&
                (color === "" || product.colors.includes(color));
            if (hasValidOptions) validItems.push({ ...item, productId, color });
            return validItems;
        }, []);
    } catch (error) {
        return [];
    }
}

function saveCart() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

function updateCartCount() {
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelectorAll("[data-cart-count]").forEach((count) => {
        count.textContent = itemCount;
    });
    document.querySelectorAll(".cart-link").forEach((link) => {
        link.setAttribute("aria-label", `Shopping cart, ${itemCount} items`);
    });
}

function addToCart(productId, size, color, quantity) {
    const product = PRODUCTS.find((item) => item.id === productId);
    if (!product || !product.sizes.includes(size) || !Number.isInteger(quantity) || quantity < 1) {
        return false;
    }

    const existingItem = cart.find((item) => {
        return item.productId === productId && item.size === size && (item.color || "") === (color || "");
    });
    const nextQuantity = (existingItem ? existingItem.quantity : 0) + quantity;
    if (nextQuantity > product.stock) return false;

    if (existingItem) {
        existingItem.quantity = nextQuantity;
    } else {
        cart.push({ productId, size, color: color || "", quantity });
    }

    saveCart();
    return true;
}

function renderProductCards(category = "all") {
    const grid = document.getElementById("product-grid");
    if (!grid) return;

    const products = category === "all"
        ? PRODUCTS
        : PRODUCTS.filter((product) => product.categories.includes(category));

    grid.innerHTML = products.map((product) => `
        <article class="product-card">
            <a class="product-image-link" href="product-details.html?id=${product.id}" aria-label="View ${product.name} details">
                <img src="${product.image}" alt="${product.imageAlt}" loading="lazy">
            </a>
            <div class="product-info">
                <p class="product-category">${CATEGORY_LABELS[product.categories[0]] || product.categories[0]}</p>
                <h3>${product.name}</h3>
                <p class="price">${money.format(product.price)}</p>
                <label class="visually-hidden" for="size-${product.id}">Choose a size for ${product.name}</label>
                <select class="quick-size" id="size-${product.id}" required>
                    <option value="">Choose size</option>
                    ${product.sizes.map((size) => `<option value="${size}">${size}</option>`).join("")}
                </select>
                <div class="product-actions">
                    <a class="details-button" href="product-details.html?id=${product.id}">View Details</a>
                    <button class="add-btn" type="button" data-quick-add="${product.id}">Add to Cart</button>
                </div>
                <p class="inline-message" data-card-message="${product.id}" aria-live="polite"></p>
            </div>
        </article>
    `).join("");

    const status = document.getElementById("product-status");
    if (status) {
        status.textContent = products.length === 1 ? "Showing 1 dress." : `Showing ${products.length} dresses.`;
    }
}

function setProductFilter(category) {
    document.querySelectorAll("[data-product-filter]").forEach((button) => {
        const selected = button.dataset.productFilter === category;
        button.classList.toggle("is-active", selected);
        button.setAttribute("aria-pressed", String(selected));
    });
    renderProductCards(category);
}

function renderCart() {
    const list = document.getElementById("cart-items");
    const totalElement = document.getElementById("cart-total");
    if (!list || !totalElement) return;

    if (cart.length === 0) {
        list.innerHTML = '<p class="empty-message">Your cart is empty. Browse the dresses above to add a favourite.</p>';
        totalElement.textContent = money.format(0);
        return;
    }

    list.innerHTML = cart.map((item) => {
        const product = PRODUCTS.find((entry) => entry.id === item.productId);
        const itemTotal = product.price * item.quantity;
        const colorText = item.color ? `<span>Colour: ${item.color}</span>` : "";
        return `
            <article class="cart-item">
                <img src="${product.image}" alt="${product.imageAlt}" loading="lazy">
                <div class="cart-item-info">
                    <h3>${product.name}</h3>
                    <span>Size: ${item.size}</span>
                    ${colorText}
                    <span>${money.format(product.price)} each</span>
                </div>
                <div class="quantity-control" aria-label="Quantity for ${product.name}">
                    <button type="button" data-cart-action="decrease" data-product-id="${item.productId}" data-size="${item.size}" data-color="${item.color}" aria-label="Decrease quantity" ${item.quantity <= 1 ? "disabled" : ""}>-</button>
                    <span>${item.quantity}</span>
                    <button type="button" data-cart-action="increase" data-product-id="${item.productId}" data-size="${item.size}" data-color="${item.color}" aria-label="Increase quantity" ${item.quantity >= product.stock ? "disabled" : ""}>+</button>
                </div>
                <strong class="cart-item-total">${money.format(itemTotal)}</strong>
                <button class="remove-button" type="button" data-cart-action="remove" data-product-id="${item.productId}" data-size="${item.size}" data-color="${item.color}">Remove</button>
            </article>
        `;
    }).join("");

    const total = cart.reduce((sum, item) => {
        const product = PRODUCTS.find((entry) => entry.id === item.productId);
        return sum + product.price * item.quantity;
    }, 0);
    totalElement.textContent = money.format(total);
}

function showMessage(element, message, kind = "error") {
    if (!element) return;
    element.textContent = message;
    element.classList.toggle("is-success", kind === "success");
    element.classList.toggle("is-error", kind === "error");
}

function initializeNavigation() {
    const menuButton = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".nav-links");
    if (!menuButton || !menu) return;

    menuButton.addEventListener("click", () => {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
        menu.classList.toggle("is-open", !isOpen);
    });

    menu.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Open navigation menu");
            menu.classList.remove("is-open");
        }
    });
}

function initializeProductFilters() {
    document.querySelectorAll("[data-product-filter]").forEach((button) => {
        button.addEventListener("click", () => setProductFilter(button.dataset.productFilter));
    });

    document.querySelectorAll("[data-category-filter]").forEach((link) => {
        link.addEventListener("click", () => setProductFilter(link.dataset.categoryFilter));
    });
}

function initializeQuickAdd() {
    const grid = document.getElementById("product-grid");
    if (!grid) return;

    grid.addEventListener("click", (event) => {
        const button = event.target.closest("[data-quick-add]");
        if (!button) return;

        const productId = button.dataset.quickAdd;
        const card = button.closest(".product-card");
        const size = card.querySelector(".quick-size").value;
        const message = card.querySelector(`[data-card-message="${productId}"]`);

        if (!size) {
            showMessage(message, "Please choose a size first.");
            card.querySelector(".quick-size").focus();
            return;
        }

        if (!addToCart(productId, size, "", 1)) {
            showMessage(message, "That size has reached the demo stock limit.");
            return;
        }
        showMessage(message, "Added to your cart.", "success");
    });
}

function initializeCartControls() {
    const list = document.getElementById("cart-items");
    if (!list) return;

    list.addEventListener("click", (event) => {
        const button = event.target.closest("[data-cart-action]");
        if (!button) return;

        const { cartAction, productId, size, color } = button.dataset;
        const itemIndex = cart.findIndex((item) => {
            return item.productId === productId && item.size === size && item.color === (color || "");
        });
        if (itemIndex < 0) return;

        if (cartAction === "remove") {
            cart.splice(itemIndex, 1);
        } else if (cartAction === "increase") {
            const product = PRODUCTS.find((entry) => entry.id === productId);
            if (cart[itemIndex].quantity < product.stock) cart[itemIndex].quantity += 1;
        } else if (cartAction === "decrease" && cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
        }
        saveCart();
    });

    const checkoutLink = document.getElementById("checkout-link");
    checkoutLink?.addEventListener("click", (event) => {
        if (cart.length > 0) return;
        event.preventDefault();
        showMessage(document.getElementById("cart-status"), "Add a dress to your cart before checkout.");
    });
}

function initializeDetailPage() {
    const container = document.getElementById("product-detail");
    if (!container) return;

    const productId = new URLSearchParams(window.location.search).get("id");
    const product = PRODUCTS.find((item) => item.id === productId);
    if (!product) {
        container.innerHTML = '<div class="notice-panel"><h1>We could not find that dress.</h1><p>Please return to the collection and choose a product.</p><a class="shop-btn" href="index.html#products">Back to Shopping</a></div>';
        return;
    }

    container.innerHTML = `
        <div class="detail-image"><img src="${product.image}" alt="${product.imageAlt}"></div>
        <div class="detail-copy">
            <p class="eyebrow">STYLE NEST COLLECTION</p>
            <h1>${product.name}</h1>
            <p class="detail-price">${money.format(product.price)}</p>
            <p class="detail-description">${product.description}</p>
            <p class="stock-note">${product.stock} available in this demo</p>
            <form id="detail-form" class="stacked-form" novalidate>
                <label for="detail-size">Size <span aria-hidden="true">*</span></label>
                <select id="detail-size" name="size" required>
                    <option value="">Choose a size</option>
                    ${product.sizes.map((size) => `<option value="${size}">${size}</option>`).join("")}
                </select>
                <label for="detail-color">Colour</label>
                <select id="detail-color" name="color">
                    ${product.colors.map((color) => `<option value="${color}">${color}</option>`).join("")}
                </select>
                <label for="detail-quantity">Quantity <span aria-hidden="true">*</span></label>
                <input id="detail-quantity" name="quantity" type="number" min="1" max="${product.stock}" value="1" required>
                <p class="form-message" id="detail-message" aria-live="polite"></p>
                <div class="detail-actions">
                    <button class="shop-btn" type="submit" data-next="cart">Add to Cart</button>
                    <button class="secondary-button" type="submit" data-next="checkout">Buy Now</button>
                </div>
            </form>
            <a class="back-link" href="index.html#products">Back to Shopping</a>
        </div>
    `;

    document.getElementById("detail-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const size = form.elements.size.value;
        const color = form.elements.color.value;
        const quantity = Number(form.elements.quantity.value);
        const message = document.getElementById("detail-message");

        if (!size) {
            showMessage(message, "Please choose a size.");
            form.elements.size.focus();
            return;
        }
        if (!Number.isInteger(quantity) || quantity < 1 || quantity > product.stock) {
            showMessage(message, `Choose a quantity from 1 to ${product.stock}.`);
            form.elements.quantity.focus();
            return;
        }
        if (!addToCart(product.id, size, color, quantity)) {
            showMessage(message, "That quantity is above the remaining demo stock for this size.");
            return;
        }

        if (event.submitter.dataset.next === "checkout") {
            window.location.href = "purchase-details.html";
        } else {
            showMessage(message, "Added to your cart.", "success");
        }
    });
}

function readDelivery() {
    try {
        return JSON.parse(sessionStorage.getItem(DELIVERY_STORAGE_KEY) || "null");
    } catch (error) {
        return null;
    }
}

function cartTotal() {
    return cart.reduce((sum, item) => {
        const product = PRODUCTS.find((entry) => entry.id === item.productId);
        return sum + product.price * item.quantity;
    }, 0);
}

function renderOrderSummary(targetId, totalId) {
    const summary = document.getElementById(targetId);
    if (!summary) return;

    if (cart.length === 0) {
        summary.innerHTML = '<p class="empty-message">Your cart is empty. <a href="index.html#products">Return to the dresses</a>.</p>';
        const totalElement = document.getElementById(totalId);
        if (totalElement) totalElement.textContent = money.format(0);
        return;
    }

    summary.innerHTML = cart.map((item) => {
        const product = PRODUCTS.find((entry) => entry.id === item.productId);
        return `<div class="summary-line"><span>${product.name} (${item.size}) × ${item.quantity}</span><strong>${money.format(product.price * item.quantity)}</strong></div>`;
    }).join("");

    const totalElement = document.getElementById(totalId);
    if (totalElement) totalElement.textContent = money.format(cartTotal());
}

function initializePurchasePage() {
    const form = document.getElementById("purchase-form");
    if (!form) return;

    renderOrderSummary("purchase-summary", "purchase-total");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const message = document.getElementById("purchase-message");
        if (cart.length === 0) {
            showMessage(message, "Your cart is empty. Add a dress before continuing.");
            return;
        }

        const values = Object.fromEntries(new FormData(form).entries());
        const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email);
        const mobileIsValid = /^[6-9]\d{9}$/.test(values.mobile);
        const pinIsValid = /^\d{6}$/.test(values.pincode);

        if (values.fullName.trim().length < 2) {
            showMessage(message, "Please enter your full name.");
            form.elements.fullName.focus();
        } else if (!mobileIsValid) {
            showMessage(message, "Enter a 10-digit Indian mobile number starting with 6, 7, 8, or 9.");
            form.elements.mobile.focus();
        } else if (!emailIsValid) {
            showMessage(message, "Enter a valid email address.");
            form.elements.email.focus();
        } else if (!values.address.trim() || !values.city.trim() || !values.state.trim()) {
            showMessage(message, "Complete your address, city, and state.");
        } else if (!pinIsValid) {
            showMessage(message, "Enter a 6-digit PIN Code.");
            form.elements.pincode.focus();
        } else {
            sessionStorage.setItem(DELIVERY_STORAGE_KEY, JSON.stringify(values));
            window.location.href = "payment-details.html";
        }
    });
}

function initializePaymentPage() {
    const form = document.getElementById("payment-form");
    if (!form) return;

    const delivery = readDelivery();
    if (!delivery) {
        document.getElementById("delivery-summary").textContent = "Add delivery details to continue.";
    } else {
        document.getElementById("delivery-summary").textContent = `${delivery.fullName}, ${delivery.city}, ${delivery.state} ${delivery.pincode}`;
    }
    renderOrderSummary("payment-summary", "payment-total");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const message = document.getElementById("payment-message");
        const selectedMethod = form.querySelector('input[name="paymentMethod"]:checked');
        if (!delivery || cart.length === 0) {
            showMessage(message, "Your checkout details are missing. Please return to delivery details.");
            return;
        }
        if (!selectedMethod) {
            showMessage(message, "Choose Cash on Delivery or demonstration UPI.");
            return;
        }

        const order = {
            reference: `SN-DEMO-${Date.now().toString().slice(-6)}`,
            paymentMethod: selectedMethod.value,
            total: cartTotal(),
            items: cart.map((item) => ({ ...item }))
        };
        sessionStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(order));
        sessionStorage.removeItem(DELIVERY_STORAGE_KEY);
        cart = [];
        saveCart();
        window.location.href = "order-confirmation.html";
    });
}

function initializeConfirmationPage() {
    const container = document.getElementById("confirmation-content");
    if (!container) return;

    let order;
    try {
        order = JSON.parse(sessionStorage.getItem(ORDER_STORAGE_KEY) || "null");
    } catch (error) {
        order = null;
    }

    if (!order) {
        container.innerHTML = '<div class="notice-panel"><h1>No demo order found</h1><p>Place a demo order to see the confirmation details.</p><a class="shop-btn" href="index.html#products">Continue Shopping</a></div>';
        return;
    }

    const lines = order.items.map((item) => {
        const product = PRODUCTS.find((entry) => entry.id === item.productId);
        if (!product) return "";
        return `<div class="summary-line"><span>${product.name} (${item.size}) × ${item.quantity}</span><strong>${money.format(product.price * item.quantity)}</strong></div>`;
    }).join("");

    container.innerHTML = `
        <div class="confirmation-mark" aria-hidden="true">✓</div>
        <p class="eyebrow">DEMO CHECKOUT COMPLETE</p>
        <h1>Your demo order is ready</h1>
        <p class="demo-warning">This is only a frontend demonstration. The order was not sent to a real store and no payment was processed.</p>
        <p class="order-reference">Reference: <strong>${order.reference}</strong></p>
        <div class="summary-list">${lines}</div>
        <div class="summary-line confirmation-total"><span>Total</span><strong>${money.format(order.total)}</strong></div>
        <p class="payment-note">Selected demo method: ${order.paymentMethod}</p>
        <a class="shop-btn" href="index.html#products">Continue Shopping</a>
    `;
}

function initializeNewsletter() {
    const form = document.getElementById("newsletter-form");
    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = form.elements.email.value.trim();
        const message = document.getElementById("newsletter-message");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showMessage(message, "Please enter a valid email address.");
            form.elements.email.focus();
            return;
        }
        showMessage(message, "Thanks! This demo does not send or store your email.", "success");
        form.reset();
    });
}

function initializeContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const values = Object.fromEntries(new FormData(form).entries());
        const message = document.getElementById("contact-message");
        const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email);
        if (values.name.trim().length < 2 || !emailIsValid || !values.subject.trim() || values.message.trim().length < 5) {
            showMessage(message, "Please complete each field and enter a valid email address.");
            return;
        }
        showMessage(message, "Thanks for your message. This demo has not sent it to a server.", "success");
        form.reset();
    });
}

initializeNavigation();
updateCartCount();
renderProductCards();
renderCart();
initializeProductFilters();
initializeQuickAdd();
initializeCartControls();
initializeDetailPage();
initializePurchasePage();
initializePaymentPage();
initializeConfirmationPage();
initializeNewsletter();
initializeContactForm();
