class RoomSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :radio, :note, :image

  def image
    rails_blob_path(object.files, only_path: true) if object.files.attached?
  end
end
