class GumnutChallengesController < ApplicationController
  before_action :set_gumnut_challenge, only: %i[ show edit update destroy ]

  # GET /gumnut_challenges or /gumnut_challenges.json
  def index
    @gumnut_challenges = GumnutChallenge.all
  end

  # GET /gumnut_challenges/1 or /gumnut_challenges/1.json
  def show
  end

  # GET /gumnut_challenges/new
  def new
    @gumnut_challenge = GumnutChallenge.new
  end

  # GET /gumnut_challenges/1/edit
  def edit
  end

  # POST /gumnut_challenges or /gumnut_challenges.json
  def create
    @gumnut_challenge = GumnutChallenge.new(gumnut_challenge_params)

    respond_to do |format|
      if @gumnut_challenge.save
        format.html { redirect_to @gumnut_challenge, notice: "Gumnut challenge was successfully created." }
        format.json { render :show, status: :created, location: @gumnut_challenge }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @gumnut_challenge.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /gumnut_challenges/1 or /gumnut_challenges/1.json
  def update
    respond_to do |format|
      if @gumnut_challenge.update(gumnut_challenge_params)
        format.html { redirect_to @gumnut_challenge, notice: "Gumnut challenge was successfully updated." }
        format.json { render :show, status: :ok, location: @gumnut_challenge }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @gumnut_challenge.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /gumnut_challenges/1 or /gumnut_challenges/1.json
  def destroy
    @gumnut_challenge.destroy!

    respond_to do |format|
      format.html { redirect_to gumnut_challenges_path, status: :see_other, notice: "Gumnut challenge was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_gumnut_challenge
      @gumnut_challenge = GumnutChallenge.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def gumnut_challenge_params
      params.expect(gumnut_challenge: [ :title, :start, :rules, :motivation ])
    end
end
