class RoomsController < ApplicationController
  before_action :find_room

  def index
      render json: @room
  end

  def update
    @room.update(room_params)
    if @room.save
      render json: @room, status: :accepted
    else
      render json: { errors: @room.errors.full_messages }, status: :unprocessible_entity
    end
  end

  private

  def room_params
    params.permit(:radio, :note, :dishes)
  end

  def find_room
    @room = Room.first
  end

end
