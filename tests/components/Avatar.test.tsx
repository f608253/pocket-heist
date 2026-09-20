import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import Avatar from "@/components/Avatar"

describe("Avatar", () => {
  it("renders successfully", () => {
    render(<Avatar name="John Doe" />)
    expect(screen.getByText("J")).toBeDefined()
  })

  it("uses first two uppercase letters for PascalCase", () => {
    render(<Avatar name="JohnDoe" />)
    expect(screen.getByText("JD")).toBeDefined()
  })

  it("handles single name correctly", () => {
    render(<Avatar name="John" />)
    expect(screen.getByText("J")).toBeDefined()
  })
})
