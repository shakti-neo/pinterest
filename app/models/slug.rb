class Slug < ActiveRecord::Base
  def set_slug(slug, id)
    $redis.set(slug, id)
  end

  def get_id(slug)
    $redis.get(slug)
  end
end
