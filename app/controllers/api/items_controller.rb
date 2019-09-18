class Api::ItemsController < ApplicationController
  before_action :set_depart
  def index
    render json: @depart.items
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end

  private
  

  def set_depart
    @depart = Depart.find(params[:id])
  end
end
