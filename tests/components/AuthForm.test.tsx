import { render, screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import AuthForm from "@/components/AuthForm"

describe("AuthForm", () => {
  beforeEach(() => {
    vi.spyOn(console, 'log').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("renders correctly in login mode", () => {
    render(<AuthForm mode="login" />)
    expect(screen.getByRole("heading", { name: "Log In" })).toBeDefined()
    expect(screen.getByRole("button", { name: "Log In" })).toBeDefined()
    expect(screen.getByText(/Don't have an account\?/i)).toBeDefined()
  })

  it("renders correctly in signup mode", () => {
    render(<AuthForm mode="signup" />)
    expect(screen.getByRole("heading", { name: "Sign Up" })).toBeDefined()
    expect(screen.getByRole("button", { name: "Sign Up" })).toBeDefined()
    expect(screen.getByText(/Already have an account\?/i)).toBeDefined()
  })

  it("updates email and password input state", async () => {
    const user = userEvent.setup()
    render(<AuthForm mode="login" />)

    const emailInput = screen.getByLabelText("Email") as HTMLInputElement
    const passwordInput = screen.getByLabelText("Password") as HTMLInputElement

    await user.type(emailInput, "test@example.com")
    await user.type(passwordInput, "password123")

    expect(emailInput.value).toBe("test@example.com")
    expect(passwordInput.value).toBe("password123")
  })

  it("toggles password visibility", async () => {
    const user = userEvent.setup()
    render(<AuthForm mode="login" />)

    const passwordInput = screen.getByLabelText("Password") as HTMLInputElement
    expect(passwordInput.type).toBe("password")

    const toggleButton = screen.getByRole("button", { name: /Toggle password visibility/i })
    await user.click(toggleButton)

    expect(passwordInput.type).toBe("text")

    await user.click(toggleButton)
    expect(passwordInput.type).toBe("password")
  })

  it("calls console.log on form submission", async () => {
    const user = userEvent.setup()
    render(<AuthForm mode="login" />)

    const emailInput = screen.getByLabelText("Email")
    const passwordInput = screen.getByLabelText("Password")
    const submitButton = screen.getByRole("button", { name: "Log In" })

    await user.type(emailInput, "test@example.com")
    await user.type(passwordInput, "password123")
    await user.click(submitButton)

    expect(console.log).toHaveBeenCalledWith("Form Submitted:", {
      mode: "login",
      email: "test@example.com",
      password: "password123"
    })
  })
})
