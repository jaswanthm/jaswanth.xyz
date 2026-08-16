"use client";

import Script from "next/script";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

const clientToken = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
const priceId = process.env.NEXT_PUBLIC_PADDLE_PRICE_ID;
const environment =
  process.env.NEXT_PUBLIC_PADDLE_ENVIRONMENT === "production"
    ? "production"
    : "sandbox";

let paddleInitialized = false;

export function PaddleScript() {
  const router = useRouter();

  const initializePaddle = useCallback(() => {
    if (!window.Paddle || !clientToken || paddleInitialized) {
      return;
    }

    if (environment === "sandbox") {
      window.Paddle.Environment.set("sandbox");
    }

    window.Paddle.Initialize({
      token: clientToken,
      eventCallback: (event) => {
        if (event.name === "checkout.completed") {
          router.push("/success");
        }
      },
    });
    paddleInitialized = true;
  }, [router]);

  return (
    <Script
      src="https://cdn.paddle.com/paddle/v2/paddle.js"
      strategy="afterInteractive"
      onLoad={initializePaddle}
    />
  );
}

type CheckoutButtonProps = {
  className?: string;
  children?: React.ReactNode;
};

export function CheckoutButton({
  className = "purchase-button",
  children = "Get course access",
}: CheckoutButtonProps) {
  const [message, setMessage] = useState("");

  const openCheckout = () => {
    if (!clientToken || !priceId) {
      setMessage("Checkout is being configured. Please try again shortly.");
      return;
    }

    if (!window.Paddle || !paddleInitialized) {
      setMessage("Checkout is still loading. Please try again.");
      return;
    }

    setMessage("");
    window.Paddle.Checkout.open({
      items: [{ priceId, quantity: 1 }],
      settings: {
        displayMode: "overlay",
        theme: "light",
        locale: "en",
      },
    });
  };

  return (
    <div className="checkout-action">
      <button className={className} type="button" onClick={openCheckout}>
        {children}
        <span aria-hidden="true">→</span>
      </button>
      {message ? (
        <p className="checkout-message" role="status">
          {message}
        </p>
      ) : null}
    </div>
  );
}
