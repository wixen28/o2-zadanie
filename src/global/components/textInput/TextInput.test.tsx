import { render, screen, fireEvent } from '@testing-library/react'
import TextInput, { TextInputState } from './TextInput'

describe('TextInput Component', () => {
  test('should render correctly with label and placeholder', () => {
    render(
      <TextInput
        type="text"
        id="username"
        label="Username"
        placeholder="Enter your username"
        value=""
        onChange={() => {}}
      />
    )

    const inputElement = screen.getByLabelText(/Username/i)
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute('placeholder', 'Enter your username')
  })

  test('should change state to focus when input is focused', () => {
    render(
      <TextInput
        type="text"
        id="username"
        label="Username"
        placeholder="Enter your username"
        value=""
        onChange={() => {}}
      />
    )

    const inputElement = screen.getByLabelText(/Username/i)
    fireEvent.focus(inputElement)
    expect(inputElement).toHaveClass('border-o2-state-defaultFocus')
  })

  test('should change state to error when input is blurred with error state', () => {
    render(
      <TextInput
        type="text"
        id="username"
        label="Username"
        placeholder="Enter your username"
        value=""
        state={TextInputState.ERROR}
        onChange={() => {}}
      />
    )

    const inputElement = screen.getByLabelText(/Username/i)
    fireEvent.blur(inputElement)
    expect(inputElement).toHaveClass('border-o2-surface-danger')
  })

  test('should call onChange when input value changes', () => {
    const handleChange = jest.fn()
    
    render(
      <TextInput
        type="text"
        id="username"
        label="Username"
        placeholder="Enter your username"
        value=""
        onChange={handleChange}
      />
    )

    const inputElement = screen.getByLabelText(/Username/i)
    fireEvent.change(inputElement, { target: { value: 'new value' } })
    expect(handleChange).toHaveBeenCalled()
  })

  test('should render with custom className', () => {
    render(
      <TextInput
        type="text"
        id="username"
        label="Username"
        placeholder="Enter your username"
        value=""
        onChange={() => {}}
        className="custom-class"
      />
    )

    const inputElement = screen.getByLabelText(/Username/i)
    expect(inputElement).toHaveClass('custom-class')
  })
})
