class RoomsController < ApplicationController

def index
    @room = Room.first
    render json: @room
end


end
