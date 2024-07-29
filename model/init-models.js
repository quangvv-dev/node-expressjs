var DataTypes = require("sequelize").DataTypes;
var _albums = require("./albums");
var _branchs = require("./branchs");
var _call_center = require("./call_center");
var _campaigns = require("./campaigns");
var _categories = require("./categories");
var _cham_congs = require("./cham_congs");
var _combo_services = require("./combo_services");
var _comments = require("./comments");
var _commission_employees = require("./commission_employees");
var _commissions = require("./commissions");
var _contacts = require("./contacts");
var _customer_campaign = require("./customer_campaign");
var _customer_groups = require("./customer_groups");
var _customer_posts = require("./customer_posts");
var _customers = require("./customers");
var _danh_muc_thu_chis = require("./danh_muc_thu_chis");
var _departments = require("./departments");
var _don_tus = require("./don_tus");
var _elements = require("./elements");
var _fanpage_posts = require("./fanpage_posts");
var _fanpages = require("./fanpages");
var _genitives = require("./genitives");
var _gifts = require("./gifts");
var _group_comments = require("./group_comments");
var _history_depots = require("./history_depots");
var _history_import_salaries = require("./history_import_salaries");
var _history_sms = require("./history_sms");
var _history_statuses = require("./history_statuses");
var _history_update_orders = require("./history_update_orders");
var _history_wallet_ctv = require("./history_wallet_ctv");
var _jobs = require("./jobs");
var _landipages = require("./landipages");
var _leave_reasons = require("./leave_reasons");
var _list_calls = require("./list_calls");
var _locations = require("./locations");
var _ly_do_thu_chis = require("./ly_do_thu_chis");
var _migrations = require("./migrations");
var _multiple_page_groups = require("./multiple_page_groups");
var _notifications = require("./notifications");
var _notifications_customers = require("./notifications_customers");
var _order_detail = require("./order_detail");
var _orders = require("./orders");
var _otps = require("./otps");
var _package_wallets = require("./package_wallets");
var _password_resets = require("./password_resets");
var _payment_banks = require("./payment_banks");
var _payment_histories = require("./payment_histories");
var _payment_wallets = require("./payment_wallets");
var _personal_images = require("./personal_images");
var _position_cskhs = require("./position_cskhs");
var _positions = require("./positions");
var _posts = require("./posts");
var _price_marketings = require("./price_marketings");
var _product_depots = require("./product_depots");
var _products = require("./products");
var _promotions = require("./promotions");
var _quick_replies = require("./quick_replies");
var _reasons = require("./reasons");
var _receive_money = require("./receive_money");
var _roles = require("./roles");
var _rules = require("./rules");
var _rules_output = require("./rules_output");
var _salaries = require("./salaries");
var _schedules = require("./schedules");
var _schedules_sms = require("./schedules_sms");
var _seeding_numbers = require("./seeding_numbers");
var _services = require("./services");
var _setting_customers = require("./setting_customers");
var _settings = require("./settings");
var _sources = require("./sources");
var _status = require("./status");
var _support_orders = require("./support_orders");
var _task_status = require("./task_status");
var _tasks = require("./tasks");
var _team_members = require("./team_members");
var _teams = require("./teams");
var _thu_chis = require("./thu_chis");
var _time_status = require("./time_status");
var _tips = require("./tips");
var _token_zal_oas = require("./token_zal_oas");
var _trademarks = require("./trademarks");
var _user_filter_grids = require("./user_filter_grids");
var _user_personal = require("./user_personal");
var _user_tasks = require("./user_tasks");
var _users = require("./users");
var _wallet_histories = require("./wallet_histories");

function initModels(sequelize) {
  var albums = _albums(sequelize, DataTypes);
  var branchs = _branchs(sequelize, DataTypes);
  var call_center = _call_center(sequelize, DataTypes);
  var campaigns = _campaigns(sequelize, DataTypes);
  var categories = _categories(sequelize, DataTypes);
  var cham_congs = _cham_congs(sequelize, DataTypes);
  var combo_services = _combo_services(sequelize, DataTypes);
  var comments = _comments(sequelize, DataTypes);
  var commission_employees = _commission_employees(sequelize, DataTypes);
  var commissions = _commissions(sequelize, DataTypes);
  var contacts = _contacts(sequelize, DataTypes);
  var customer_campaign = _customer_campaign(sequelize, DataTypes);
  var customer_groups = _customer_groups(sequelize, DataTypes);
  var customer_posts = _customer_posts(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var danh_muc_thu_chis = _danh_muc_thu_chis(sequelize, DataTypes);
  var departments = _departments(sequelize, DataTypes);
  var don_tus = _don_tus(sequelize, DataTypes);
  var elements = _elements(sequelize, DataTypes);
  var fanpage_posts = _fanpage_posts(sequelize, DataTypes);
  var fanpages = _fanpages(sequelize, DataTypes);
  var genitives = _genitives(sequelize, DataTypes);
  var gifts = _gifts(sequelize, DataTypes);
  var group_comments = _group_comments(sequelize, DataTypes);
  var history_depots = _history_depots(sequelize, DataTypes);
  var history_import_salaries = _history_import_salaries(sequelize, DataTypes);
  var history_sms = _history_sms(sequelize, DataTypes);
  var history_statuses = _history_statuses(sequelize, DataTypes);
  var history_update_orders = _history_update_orders(sequelize, DataTypes);
  var history_wallet_ctv = _history_wallet_ctv(sequelize, DataTypes);
  var jobs = _jobs(sequelize, DataTypes);
  var landipages = _landipages(sequelize, DataTypes);
  var leave_reasons = _leave_reasons(sequelize, DataTypes);
  var list_calls = _list_calls(sequelize, DataTypes);
  var locations = _locations(sequelize, DataTypes);
  var ly_do_thu_chis = _ly_do_thu_chis(sequelize, DataTypes);
  var migrations = _migrations(sequelize, DataTypes);
  var multiple_page_groups = _multiple_page_groups(sequelize, DataTypes);
  var notifications = _notifications(sequelize, DataTypes);
  var notifications_customers = _notifications_customers(sequelize, DataTypes);
  var order_detail = _order_detail(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var otps = _otps(sequelize, DataTypes);
  var package_wallets = _package_wallets(sequelize, DataTypes);
  var password_resets = _password_resets(sequelize, DataTypes);
  var payment_banks = _payment_banks(sequelize, DataTypes);
  var payment_histories = _payment_histories(sequelize, DataTypes);
  var payment_wallets = _payment_wallets(sequelize, DataTypes);
  var personal_images = _personal_images(sequelize, DataTypes);
  var position_cskhs = _position_cskhs(sequelize, DataTypes);
  var positions = _positions(sequelize, DataTypes);
  var posts = _posts(sequelize, DataTypes);
  var price_marketings = _price_marketings(sequelize, DataTypes);
  var product_depots = _product_depots(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var promotions = _promotions(sequelize, DataTypes);
  var quick_replies = _quick_replies(sequelize, DataTypes);
  var reasons = _reasons(sequelize, DataTypes);
  var receive_money = _receive_money(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var rules = _rules(sequelize, DataTypes);
  var rules_output = _rules_output(sequelize, DataTypes);
  var salaries = _salaries(sequelize, DataTypes);
  var schedules = _schedules(sequelize, DataTypes);
  var schedules_sms = _schedules_sms(sequelize, DataTypes);
  var seeding_numbers = _seeding_numbers(sequelize, DataTypes);
  var services = _services(sequelize, DataTypes);
  var setting_customers = _setting_customers(sequelize, DataTypes);
  var settings = _settings(sequelize, DataTypes);
  var sources = _sources(sequelize, DataTypes);
  var status = _status(sequelize, DataTypes);
  var support_orders = _support_orders(sequelize, DataTypes);
  var task_status = _task_status(sequelize, DataTypes);
  var tasks = _tasks(sequelize, DataTypes);
  var team_members = _team_members(sequelize, DataTypes);
  var teams = _teams(sequelize, DataTypes);
  var thu_chis = _thu_chis(sequelize, DataTypes);
  var time_status = _time_status(sequelize, DataTypes);
  var tips = _tips(sequelize, DataTypes);
  var token_zal_oas = _token_zal_oas(sequelize, DataTypes);
  var trademarks = _trademarks(sequelize, DataTypes);
  var user_filter_grids = _user_filter_grids(sequelize, DataTypes);
  var user_personal = _user_personal(sequelize, DataTypes);
  var user_tasks = _user_tasks(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var wallet_histories = _wallet_histories(sequelize, DataTypes);

  customer_campaign.belongsTo(campaigns, { as: "campaign", foreignKey: "campaign_id"});
  campaigns.hasMany(customer_campaign, { as: "customer_campaigns", foreignKey: "campaign_id"});
  customer_campaign.belongsTo(customers, { as: "customer", foreignKey: "customer_id"});
  customers.hasMany(customer_campaign, { as: "customer_campaigns", foreignKey: "customer_id"});
  history_update_orders.belongsTo(orders, { as: "order", foreignKey: "order_id"});
  orders.hasMany(history_update_orders, { as: "history_update_orders", foreignKey: "order_id"});
  history_update_orders.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(history_update_orders, { as: "history_update_orders", foreignKey: "user_id"});
  personal_images.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(personal_images, { as: "personal_images", foreignKey: "user_id"});
  user_personal.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(user_personal, { as: "user_personals", foreignKey: "user_id"});

  return {
    albums,
    branchs,
    call_center,
    campaigns,
    categories,
    cham_congs,
    combo_services,
    comments,
    commission_employees,
    commissions,
    contacts,
    customer_campaign,
    customer_groups,
    customer_posts,
    customers,
    danh_muc_thu_chis,
    departments,
    don_tus,
    elements,
    fanpage_posts,
    fanpages,
    genitives,
    gifts,
    group_comments,
    history_depots,
    history_import_salaries,
    history_sms,
    history_statuses,
    history_update_orders,
    history_wallet_ctv,
    jobs,
    landipages,
    leave_reasons,
    list_calls,
    locations,
    ly_do_thu_chis,
    migrations,
    multiple_page_groups,
    notifications,
    notifications_customers,
    order_detail,
    orders,
    otps,
    package_wallets,
    password_resets,
    payment_banks,
    payment_histories,
    payment_wallets,
    personal_images,
    position_cskhs,
    positions,
    posts,
    price_marketings,
    product_depots,
    products,
    promotions,
    quick_replies,
    reasons,
    receive_money,
    roles,
    rules,
    rules_output,
    salaries,
    schedules,
    schedules_sms,
    seeding_numbers,
    services,
    setting_customers,
    settings,
    sources,
    status,
    support_orders,
    task_status,
    tasks,
    team_members,
    teams,
    thu_chis,
    time_status,
    tips,
    token_zal_oas,
    trademarks,
    user_filter_grids,
    user_personal,
    user_tasks,
    users,
    wallet_histories,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
