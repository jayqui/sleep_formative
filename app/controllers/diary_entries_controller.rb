class DiaryEntriesController < ApplicationController
  before_action :set_diary_entry, only: %i[ show edit ] # update destroy ]

  # GET /diary_entries or /diary_entries.json
  def index
    @diary_entries = DiaryEntry.all
  end

  # GET /diary_entries/1 or /diary_entries/1.json
  def show
  end

  # GET /diary_entries/new
  def new
    @diary_entry = DiaryEntry.new
  end

  # GET /diary_entries/1/edit
  def edit
  end

  # POST /diary_entries or /diary_entries.json
  def create
    @diary_entry = DiaryEntry.new(diary_entry_params)

    respond_to do |format|
      if @diary_entry.save
        format.html { redirect_to @diary_entry, notice: "Diary entry was successfully created." }
        format.json { render :show, status: :created, location: @diary_entry }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @diary_entry.errors, status: :unprocessable_entity }
      end
    end
  end

  # # PATCH/PUT /diary_entries/1 or /diary_entries/1.json
  # def update
  #   respond_to do |format|
  #     if @diary_entry.update(diary_entry_params)
  #       format.html { redirect_to @diary_entry, notice: "Diary entry was successfully updated." }
  #       format.json { render :show, status: :ok, location: @diary_entry }
  #     else
  #       format.html { render :edit, status: :unprocessable_entity }
  #       format.json { render json: @diary_entry.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  # # DELETE /diary_entries/1 or /diary_entries/1.json
  # def destroy
  #   @diary_entry.destroy
  #   respond_to do |format|
  #     format.html { redirect_to diary_entries_url, notice: "Diary entry was successfully destroyed." }
  #     format.json { head :no_content }
  #   end
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_diary_entry
      @diary_entry = DiaryEntry.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def diary_entry_params
      params.fetch(:diary_entry, {})
    end
end
