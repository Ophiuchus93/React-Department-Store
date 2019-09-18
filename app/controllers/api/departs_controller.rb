class Api::DepartsController < ApplicationController
  before_action :set_depart, only: [:show, :update, :destroy] 

  def index
    render json: Depart.all
  end

  def show
    render json: @depart
  end

  def create
    depart = Depart.new(depart_params)

    if depart.save
      render json: depart
    else
      render json: depart.errors, status: 422
    end
  end

  def update
    if @depart.update(depart_params)
      render json: @depart
    else
      render json: @depart.errors, status: 422
    end
  end

  def destroy
    @depart.destroy
  end

  private
    def depart_params
      params.require(:depart).permit(:name)
    end

    def set_depart
      @depart = Depart.find(params[:id])
    end
end
