import { describe, it } from "vitest";
import { render, screen } from "@testing-library/vue";

import App from "../../../src/App.vue";

describe("App", () => {
  it("should test", () => {
    render(App);

    screen.debug();
  });
});
