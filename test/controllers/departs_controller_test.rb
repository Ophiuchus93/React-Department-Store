require 'test_helper'

class DepartsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get departs_index_url
    assert_response :success
  end

  test "should get show" do
    get departs_show_url
    assert_response :success
  end

  test "should get create" do
    get departs_create_url
    assert_response :success
  end

  test "should get update" do
    get departs_update_url
    assert_response :success
  end

  test "should get destroy" do
    get departs_destroy_url
    assert_response :success
  end

end
