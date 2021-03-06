require 'rails_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to test the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator. If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails. There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.

RSpec.describe '/diary_entries', type: :request do
  # DiaryEntry. As you add validations to DiaryEntry, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) do
    skip('Add a hash of attributes valid for your model')
  end

  let(:invalid_attributes) do
    skip('Add a hash of attributes invalid for your model')
  end

  describe 'GET /index' do
    it 'renders a successful response' do
      DiaryEntry.create! valid_attributes
      get diary_entries_url
      expect(response).to be_successful
    end
  end

  describe 'GET /show' do
    it 'renders a successful response' do
      diary_entry = DiaryEntry.create! valid_attributes
      get diary_entry_url(diary_entry)
      expect(response).to be_successful
    end
  end

  describe 'GET /new' do
    it 'renders a successful response' do
      get new_diary_entry_url
      expect(response).to be_successful
    end
  end

  describe 'GET /edit' do
    it 'render a successful response' do
      diary_entry = DiaryEntry.create! valid_attributes
      get edit_diary_entry_url(diary_entry)
      expect(response).to be_successful
    end
  end

  describe 'POST /create' do
    context 'with valid parameters' do
      it 'creates a new DiaryEntry' do
        expect do
          post diary_entries_url, params: { diary_entry: valid_attributes }
        end.to change(DiaryEntry, :count).by(1)
      end

      it 'redirects to the created diary_entry' do
        post diary_entries_url, params: { diary_entry: valid_attributes }
        expect(response).to redirect_to(diary_entry_url(DiaryEntry.last))
      end
    end

    context 'with invalid parameters' do
      it 'does not create a new DiaryEntry' do
        expect do
          post diary_entries_url, params: { diary_entry: invalid_attributes }
        end.to change(DiaryEntry, :count).by(0)
      end

      it "renders a successful response (i.e. to display the 'new' template)" do
        post diary_entries_url, params: { diary_entry: invalid_attributes }
        expect(response).to be_successful
      end
    end
  end

  describe 'PATCH /update' do
    context 'with valid parameters' do
      let(:new_attributes) do
        skip('Add a hash of attributes valid for your model')
      end

      it 'updates the requested diary_entry' do
        diary_entry = DiaryEntry.create! valid_attributes
        patch diary_entry_url(diary_entry), params: { diary_entry: new_attributes }
        diary_entry.reload
        skip('Add assertions for updated state')
      end

      it 'redirects to the diary_entry' do
        diary_entry = DiaryEntry.create! valid_attributes
        patch diary_entry_url(diary_entry), params: { diary_entry: new_attributes }
        diary_entry.reload
        expect(response).to redirect_to(diary_entry_url(diary_entry))
      end
    end

    context 'with invalid parameters' do
      it "renders a successful response (i.e. to display the 'edit' template)" do
        diary_entry = DiaryEntry.create! valid_attributes
        patch diary_entry_url(diary_entry), params: { diary_entry: invalid_attributes }
        expect(response).to be_successful
      end
    end
  end

  describe 'DELETE /destroy' do
    it 'destroys the requested diary_entry' do
      diary_entry = DiaryEntry.create! valid_attributes
      expect do
        delete diary_entry_url(diary_entry)
      end.to change(DiaryEntry, :count).by(-1)
    end

    it 'redirects to the diary_entries list' do
      diary_entry = DiaryEntry.create! valid_attributes
      delete diary_entry_url(diary_entry)
      expect(response).to redirect_to(diary_entries_url)
    end
  end
end
