import { Link } from "react-router-dom";

export const termsAndConditions = [
  {
    id: 1,
    title: "Use of the Website",
    description: (
      <ul className="text-zinc-600 text-sm leading-relaxed list-disc pl-5 space-y-2">
        <li>
          You must be at least <span className="font-semibold">13 years</span>{" "}
          old to use our website or place an order.
        </li>
        <li>
          You are responsible for maintaining the confidentiality of your
          account login credentials.
        </li>
        <li>
          You agree to provide accurate, current, and complete information when
          registering or checking out.
        </li>
        <li>
          You may not use our site for any illegal or unauthorized activities,
          including misuse of content or payment fraud.
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    title: "Product Information and Pricing",
    description: (
      <ul className="text-zinc-600 text-sm leading-relaxed list-disc pl-5 space-y-2">
        <li>
          We strive to provide accurate descriptions, images, and pricing for
          all magazine issues and subscriptions. However, we do not warrant that
          all information is complete, current, or error-free.
        </li>
        <li>
          All prices are listed in{" "}
          <span className="font-semibold">Sri Lankan Rupees (LKR)</span> and are
          subject to change without notice.
        </li>
        <li>
          Discounts or promotional offers may have limitations and are only
          valid during the specified time period.
        </li>
      </ul>
    ),
  },
  {
    id: 3,
    title: "Orders and Payments",
    description: (
      <ul className="text-zinc-600 text-sm leading-relaxed list-disc pl-5 space-y-2">
        <li>
          By submitting an order, you agree to purchase the selected product(s)
          under these terms.
        </li>
        <li>
          We reserve the right to cancel any order for reasons including but not
          limited to stock unavailability, errors in pricing or content, or
          suspected fraudulent behavior.
        </li>
        <li>
          You agree to provide valid payment information and authorize the full
          charge, including shipping and applicable taxes.
        </li>
      </ul>
    ),
  },
  {
    id: 4,
    title: "Shipping and Delivery",
    description: (
      <ul className="text-zinc-600 text-sm leading-relaxed list-disc pl-5 space-y-2">
        <li>
          We aim to ship physical magazine issues promptly. Delivery times are
          estimated and may vary based on location, public holidays, or courier
          service delays.
        </li>
        <li>
          Customers are responsible for providing accurate delivery details. We
          are not liable for orders delivered to incorrect addresses provided
          during checkout.
        </li>
      </ul>
    ),
  },
  {
    id: 5,
    title: "Returns and Refunds",
    description: (
      <ul className="text-zinc-600 text-sm leading-relaxed list-disc pl-5 space-y-2">
        <li>
          Please refer to our{" "}
          <Link to="/refund" className="font-semibold">
            Refund Policy
          </Link>{" "}
          for information on eligibility, processing, and conditions regarding
          returns and refunds.
        </li>
        <li>
          Digital magazine subscriptions or e-issues are{" "}
          <span className="font-semibold">non-refundable</span> once accessed or
          downloaded.
        </li>
      </ul>
    ),
  },
  {
    id: 6,
    title: "Intellectual Property",
    description: (
      <ul className="text-zinc-600 text-sm leading-relaxed list-disc pl-5 space-y-2">
        <li>
          All content on our website, including magazine layouts, graphics,
          logos, and written material, is the property of{" "}
          <span className="font-semibold">ELEVARE Magazine</span> or its
          licensors and is protected by applicable copyright and trademark laws.
        </li>
        <li>
          You may not reproduce, reuse, modify, or distribute any content from
          our site without prior written consent.
        </li>
      </ul>
    ),
  },
  {
    id: 7,
    title: "Limitation of Liability",
    description: (
      <ul className="text-zinc-600 text-sm leading-relaxed list-disc pl-5 space-y-2">
        <li>
          <span className="font-semibold">ELEVARE Magazine</span>, its team, and
          affiliates shall not be held liable for any direct, indirect,
          incidental, or consequential damages arising from your use of the
          website or the products purchased.
        </li>
        <li>
          We provide all content and services “as is” without warranties of any
          kind, either express or implied.
        </li>
      </ul>
    ),
  },
  {
    id: 8,
    title: "Amendments and Termination",
    description: (
      <p className="text-zinc-600 text-sm leading-relaxed mt-2">
        We reserve the right to update or modify these Terms and Conditions at
        any time without prior notice. It is your responsibility to review them
        periodically. Continued use of the website after any updates constitutes
        your agreement to the revised terms.
      </p>
    ),
  }
];
