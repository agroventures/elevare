export const refundPolicy = [
  {
    id: 1,
    title: "Returns",
    description: (
      <>
        <p className="text-zinc-600 text-sm">
          Due to the nature of our products—both physical and digital—we only
          accept returns of physical magazine issues within{" "}
          <span className="font-semibold">7 days</span> from the delivery date.
          To qualify for a return, the item must be
          <span className="font-semibold">unused, unopened</span>, and in its{" "}
          <span className="font-semibold">original packaging.</span> Proof of
          purchase is required.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Refunds",
    description: (
      <>
        <p className="text-zinc-600 text-sm mb-3">
          Once your return is received and inspected, we will notify you
          regarding the status of your refund. If approved, your refund will be
          processed to your original method of payment. Shipping charges are{" "}
          <span className="font-semibold">non-refundable</span>. <br />
          <br />
          Refunds are <span className="font-semibold">not issued</span> for
          digital products (such as e-magazines) or subscription plans once
          accessed or downloaded.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Exchanges",
    description: (
      <>
        <p className="text-zinc-600 text-sm mb-3">
          We allow exchanges for physical magazine copies only if the item
          received is <span className="font-semibold">damaged</span> or{" "}
          <span className="font-semibold">incorrect</span>. Please notify us
          within <span className="font-semibold">48 hours</span>
          of delivery. We will provide instructions and arrange a replacement at
          no extra cost.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Non-Returnable & Non-Refundable Items",
    description: (
      <>
        <p className="text-zinc-600 text-sm mb-3">
          The following items are{" "}
          <span className="font-semibold">not eligible</span> for return or
          refund:
        </p>
        <ul className="text-zinc-600 text-sm leading-relaxed list-disc pl-5 space-y-2">
          <li>Digital issues (PDF or ePub formats)</li>
          <li>Subscription plans (once content is accessed)</li>
          <li>Personalized or promotional items</li>
          <li>Gift cards</li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    title: "Damaged or Defective Items",
    description: (
      <>
        <p className="text-zinc-600 text-sm mb-3">
          If your physical magazine arrives{" "}
          <span className="font-semibold">damaged</span>, please contact us
          immediately with photo evidence. We will either replace the issue or
          offer a refund based on availability.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: "Return Shipping",
    description: (
      <>
        <p className="text-zinc-600 text-sm mb-3">
          You are responsible for return shipping costs unless the return is due
          to an error on our part (e.g., wrong or damaged item). In such cases,
          we will provide a{" "}
          <span className="font-semibold">prepaid shipping label</span>.
        </p>
      </>
    ),
  },
  {
    id: 7,
    title: "Processing Time",
    description: (
      <>
        <p className="text-zinc-600 text-sm mb-3">
          Refunds and exchanges are processed within{" "}
          <span className="font-semibold">5–7 business days</span> after
          receiving the returned item. Processing time may vary based on your
          bank or payment provider.
        </p>
      </>
    ),
  },
];
