def pytest_addoption(parser):
    parser.addoption("--run-http", action="store_true", default=False, help="Run HTTP transport tests")


def pytest_configure(config):
    config.addinivalue_line("markers", "http: mark test as HTTP transport test (requires --run-http)")
