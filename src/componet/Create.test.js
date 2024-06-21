import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import { MemoryRouter } from 'react-router-dom';
import Create from './Create'; 

describe('Create component', () => {
    it('should render input fields and submit button', () => {
        const { getByPlaceholderText, getByText } = render(
            <MemoryRouter>
                <Create />
            </MemoryRouter>
        );

        expect(getByPlaceholderText('Name')).toBeInTheDocument();
        expect(getByPlaceholderText('Age')).toBeInTheDocument();
        expect(getByPlaceholderText('Gmail')).toBeInTheDocument();
        expect(getByText('Submit')).toBeInTheDocument();
    });

    it('should update state on input change', () => {
        const { getByPlaceholderText } = render(
            <MemoryRouter>
                <Create />
            </MemoryRouter>
        );

        fireEvent.change(getByPlaceholderText('Name'), { target: { value: 'shubh' } });
        fireEvent.change(getByPlaceholderText('Age'), { target: { value: '26' } });
        fireEvent.change(getByPlaceholderText('Gmail'), { target: { value: 'shubh.doe@example.com' } });

        expect(getByPlaceholderText('Name')).toHaveValue('shubh');
        expect(getByPlaceholderText('Age')).toHaveValue(26);
        expect(getByPlaceholderText('Gmail')).toHaveValue('shubh.doe@example.com');
    });

        it('should submit form and call API', async () => {
            // Mock the fetch function
            jest.spyOn(global, 'fetch').mockResolvedValueOnce({
                json: jest.fn().mockResolvedValueOnce({}) 
            });

            const { getByPlaceholderText, getByText } = render(
                <MemoryRouter>
                    <Create />
                </MemoryRouter>
            );

            fireEvent.change(getByPlaceholderText('Name'), { target: { value: 'jay' } });
            fireEvent.change(getByPlaceholderText('Age'), { target: { value: '24' } });
            fireEvent.change(getByPlaceholderText('Gmail'), { target: { value: 'jay.doe@example.com' } });

            fireEvent.click(getByText('Submit'));

            await waitFor(() => {
                expect(global.fetch).toHaveBeenCalledTimes(1);
                expect(global.fetch).toHaveBeenCalledWith('https://66715560e083e62ee43b1e15.mockapi.io/crud', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        e_name: 'jay',
                        e_age: '24',
                        e_gmail: 'jay.doe@example.com'
                    })
                });
            });
        });
    });
