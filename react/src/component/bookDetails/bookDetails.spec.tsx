import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi, beforeEach } from "vitest";
import BookDetails from "./bookDetails";
import {userEvent} from '@testing-library/user-event'
import { useBookDetails } from "./useBookDetails";


vi.mock('./useBookDetails', ()=> ({
    useBookDetails: vi.fn()
}));

const useBookDetailsMock = vi.mocked(useBookDetails);



describe('BookDetails', ()=> {

    let sendBookMock: any;
    beforeEach(()=> {
        sendBookMock = vi.fn();
        useBookDetailsMock.mockReturnValue({
            sendBook:  sendBookMock
        });

        cleanup();
    });

    test('should set book details when user type new book', async ()=> {

        render(<BookDetails />);
        const rating  = screen.getByRole('inputRating');
        const title   = screen.getByRole('inputTitle');

        fireEvent.change(rating, { target: {
            name: 'rating',
            value: 10
        }});

        fireEvent.change(title, { target: {
            name: 'title',
            value: 'Book Title'
        }});


        expect(screen.getByText('title: Book Title')).toBeDefined();
        expect(screen.getByText('Rating: 10')).toBeDefined();
    });


    test('should send  book details when user click event button', async ()=> {

        //arrange
        render(<BookDetails />);
        const rating  = screen.getByRole('inputRating');
        const title   = screen.getByRole('inputTitle');

        // act 
        await userEvent.type(rating, '10');
        await userEvent.type(title, 'Book Title');
        await userEvent.click(screen.getByText('Send Rating'));

        expect(sendBookMock).toBeCalledWith({rating: '10', title: 'Book Title'});
  
    });




});
