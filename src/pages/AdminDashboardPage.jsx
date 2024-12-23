import { useEffect, useState } from "react";
import { Users, Package, Star, Menu } from "lucide-react";
import axios from "axios";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("users");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [totalUsers, setTotalUsers] = useState(null);
  const [userList, setUserList] = useState([]);
  const [equipmentList, setEquipmentList] = useState([]); // State for equipment data
  const [reviewList, setReviewList] = useState([]); // State for review data

  useEffect(() => {
    // Fetch total users count
    const fetchTotalUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users/count");
        setTotalUsers(response.data.totalUsers);
      } catch (error) {
        console.error("Error fetching total users:", error);
      }
    };

    // Fetch all user details
    const fetchUserList = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/all-users");
        setUserList(response.data);
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    };

    // Fetch all equipment details
    const fetchEquipmentList = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/equipments");
        setEquipmentList(response.data);
      } catch (error) {
        console.error("Error fetching equipment list:", error);
      }
    };

    // Fetch all reviews
    const fetchReviewList = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/reviews");
        setReviewList(response.data);
      } catch (error) {
        console.error("Error fetching review list:", error);
      }
    };

    if (activeTab === "users") {
      fetchTotalUsers();
      fetchUserList();
    } else if (activeTab === "equipments") {
      fetchEquipmentList();
    } else if (activeTab === "reviews") {
      fetchReviewList();
    }
  }, [activeTab]);

  // Delete user function
  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8000/api/users/${userId}`);
      setUserList(userList.filter(user => user.userid !== userId)); // Update user list after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Delete equipment function
  const handleDeleteEquipment = async (equipmentId) => {
    try {
      await axios.delete(`http://localhost:8000/api/equipments/${equipmentId}`);
      setEquipmentList(equipmentList.filter(equipment => equipment.equipmentid !== equipmentId)); // Update equipment list after deletion
    } catch (error) {
      console.error("Error deleting equipment:", error);
    }
  };

  // Delete review function
  const handleDeleteReview = async (reviewId) => {
    try {
      await axios.delete(`http://localhost:8000/api/reviews/${reviewId}`);
      setReviewList(reviewList.filter(review => review.reviewid !== reviewId)); // Update review list after deletion
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  const menuItems = [
    { id: "users", label: "Users", icon: Users },
    { id: "equipments", label: "Equipments", icon: Package },
    { id: "reviews", label: "Reviews", icon: Star },
  ];

  const DashboardContent = () => {
    switch (activeTab) {
      case "users":
        return (
          <div className="p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Users Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow -ml-32">
                <h3 className="font-semibold ml">Total Users</h3>
                <p className="text-2xl flex justify-center">{totalUsers ? totalUsers : "Loading..."}</p>
              </div>
            </div>

            {/* User Table */}
            <div className="mt-8 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-4">User List</h3>
              <div className="overflow-x-auto -mr-12">
                <table className="min-w-full bg-white rounded-lg shadow">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 text-left font-medium text-gray-700">User ID</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-700">Name</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-700">Role</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-700">Date Joined</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-700">Email</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-700">Phone No</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user) => (
                      <tr key={user.userid} className="border-t">
                        <td className="px-4 py-2">{user.userid}</td>
                        <td className="px-4 py-2">{user.name}</td>
                        <td className="px-4 py-2">{user.role}</td>
                        <td className="px-4 py-2">{new Date(user.datejoined).toLocaleDateString()}</td>
                        <td className="px-4 py-2">{user.email}</td>
                        <td className="px-4 py-2">{user.phoneno}</td>
                        <td className="px-4 py-2">
                          <button
                            onClick={() => handleDeleteUser(user.userid)}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case "equipments":
        return (
          <div className="p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Equipment Management</h2>
            {/* Equipment Table */}
            <div className="overflow-x-auto mt-8">
              <table className="min-w-full bg-white rounded-lg shadow">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left font-medium text-gray-700">Equipment ID</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-700">Name</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-700">Category ID</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-700">Description</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-700">Price</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-700">Location</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-700">Availability Status</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {equipmentList.map((equipment) => (
                    <tr key={equipment.equipmentid} className="border-t">
                      <td className="px-4 py-2">{equipment.equipmentid}</td>
                      <td className="px-4 py-2">{equipment.name}</td>
                      <td className="px-4 py-2">{equipment.categoryid}</td>
                      <td className="px-4 py-2">{equipment.description}</td>
                      <td className="px-4 py-2">{equipment.price}</td>
                      <td className="px-4 py-2">{equipment.location}</td>
                      <td className="px-4 py-2">{equipment.availabilitystatus}</td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => handleDeleteEquipment(equipment.equipmentid)}
                          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case "reviews":
        return (
          <div className="p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Reviews Management</h2>
            {/* Review Table */}
            <div className="overflow-x-auto mt-8">
              <table className="min-w-full bg-white rounded-lg shadow">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left font-medium text-gray-700">Review ID</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-700">User ID</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-700">Equipment ID</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-700">Rating</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-700">Comment</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewList.map((review) => (
                    <tr key={review.reviewid} className="border-t">
                      <td className="px-4 py-2">{review.reviewid}</td>
                      <td className="px-4 py-2">{review.userid}</td>
                      <td className="px-4 py-2">{review.equipmentid}</td>
                      <td className="px-4 py-2">{review.rating}</td>
                      <td className="px-4 py-2">{review.comment}</td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => handleDeleteReview(review.reviewid)}
                          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Menu Button */}
      <div className="lg:hidden p-4">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md hover:bg-gray-200">
          <Menu size={24} />
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:block w-64 bg-white h-screen fixed lg:sticky top-0 shadow-lg`}>
          <div className="p-4">
            <h1 className="text-xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>
            <nav>
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-2 p-3 rounded-lg mb-2 ${
                      activeTab === item.id
                        ? "bg-blue-500 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}>
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex lg:ml-64">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
