type PaddleEnvironment = "sandbox" | "production";

type PaddleEvent = {
  name: string;
};

type Paddle = {
  Environment: {
    set(environment: PaddleEnvironment): void;
  };
  Initialize(options: {
    token: string;
    eventCallback?: (event: PaddleEvent) => void;
  }): void;
  Checkout: {
    open(options: {
      items: Array<{ priceId: string; quantity: number }>;
      settings?: {
        displayMode?: "overlay";
        theme?: "light";
        locale?: "en";
      };
    }): void;
  };
};

interface Window {
  Paddle?: Paddle;
}
