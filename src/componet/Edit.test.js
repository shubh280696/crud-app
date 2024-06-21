import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Edit from './Edit';
import { MemoryRouter } from 'react-router-dom';

// Mock localStorage
const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
};
global.localStorage = localStorageMock;

describe('Edit Component', () => {
    beforeEach(() => {

        jest.clearAllMocks();
    });

    it('renders form fields and updates state correctly', () => {
        const dom = render(
            <MemoryRouter>
                <Edit />
            </MemoryRouter>
        );
        // Verify initial rendering and form fields

        expect(dom.getByLabelText('Enter Name:')).toBeInTheDocument();
        expect(dom.getByLabelText('Enter Age:')).toBeInTheDocument();
        expect(dom.getByLabelText('Enter Email:')).toBeInTheDocument();
    });

    it('handles form submission and updates data', async () => {
        const dom = render(
            <MemoryRouter>
                <Edit />
            </MemoryRouter>
        );

        //  user input
        fireEvent.change(dom.getByLabelText('Enter Name:'), { target: { value: 'tejas' } });
        fireEvent.change(dom.getByLabelText('Enter Age:'), { target: { value: '26' } });
        fireEvent.change(dom.getByLabelText('Enter Email:'), { target: { value: 'tejas.doe@example.com' } });

        // Mock the fetch API call
        global.fetch = jest.fn().mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve({ message: 'Update successful' })
        });

        // Simulate form submission
        fireEvent.submit(dom.getByRole('button', { name: 'Update' }));

    });


});

