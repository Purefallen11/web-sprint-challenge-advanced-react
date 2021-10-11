import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
	render(<CheckoutForm />)

});

test("shows success message on submit with form details", async () => {
	render(<CheckoutForm />)

	const fn = screen.getByLabelText(/first name/i)
	const ln = screen.getByLabelText(/last name/i)
	const addr = screen.getByLabelText(/address/i)
	const city = screen.getByLabelText(/city/i)
	const state = screen.getByLabelText(/state/i)
	const zip = screen.getByLabelText(/zip/i)

	userEvent.type(fn, 'Steve')
	userEvent.type(ln, 'Rivera')
	userEvent.type(addr, 'test 1234')
	userEvent.type(city, 'test')
	userEvent.type(state, 'Texas')
	userEvent.type(zip, '12345')

	await waitFor(() =>{
		const successMessage = screen.queryByTestId(/successMessage/i)

		expect(successMessage).toHaveTextContent()
	})
});
