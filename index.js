'use strict';

const {
    // Network Configuration
    EMCB_UDP_BROADCAST_ADDRESS,
    EMCB_UDP_PORT,

    // Application Layer Constraints
    EMCB_UDP_IMPLEMENTED_PROTOCOL_VERSION,
    EMCB_UDP_MESSAGE_THROTTLE_TIME_MS,
    EMCB_UDP_LONGEST_IMPLEMENTED_MESSAGE_LENGTH,

    // Header Constants
    EMCB_UDP_HEADER_START_MASTER,
    EMCB_UDP_HEADER_START_SLAVE,

    // GET Message Codes
    EMCB_UDP_MESSAGE_CODE_GET_NEXT_SEQUENCE_NUMBER,
    EMCB_UDP_MESSAGE_CODE_GET_DEVICE_DEBUG_DATA,
    EMCB_UDP_MESSAGE_CODE_GET_DEVICE_STATUS,
    EMCB_UDP_MESSAGE_CODE_GET_BREAKER_REMOTE_HANDLE_POSITION,
    EMCB_UDP_MESSAGE_CODE_GET_METER_TELEMETRY_DATA,

    // SET Message Codes
    EMCB_UDP_MESSAGE_CODE_SET_NEXT_SEQUENCE_NUMBER,
    EMCB_UDP_MESSAGE_CODE_SET_BREAKER_REMOTE_HANDLE_POSITION,
    EMCB_UDP_MESSAGE_CODE_SET_BARGRAPH_LED_TO_USER_DEFINED,

    // Integer Message Codes to strings
    EMCB_UDP_MESSAGE_CODES,

    // Enums / Parsed Data Constants
    EMCB_UDP_ACK,

    EMCB_UDP_SET_NEXT_SEQUENCE_NUMBER_RATE_LIMITED,
    EMCB_UDP_SET_NEXT_SEQUENCE_NUMBER_BAD_SEQUENCE_NUMBER,

    EMCB_UDP_BREAKER_REMOTE_HANDLE_POSITION_OPEN,
    EMCB_UDP_BREAKER_REMOTE_HANDLE_POSITION_CLOSED,
    EMCB_UDP_BREAKER_REMOTE_HANDLE_POSITION_FEEDBACK_MISMATCH,
    EMCB_UDP_BREAKER_REMOTE_HANDLE_POSITION_TOGGLE,

    // Errors
    EMCB_UDP_ERROR_TIMEOUT,
    EMCB_UDP_ERROR_INVALID_DATA_LENGTH,
    EMCB_UDP_ERROR_PARSER,

    // Events
    EMCB_UDP_EVENT_QUEUE_DRAINED,
    EMCB_UDP_EVENT_DEVICE_DISCOVERED,
    EMCB_UDP_EVENT_DEVICE_REMOVED,
    EMCB_UDP_EVENT_DEVICE_IP_ADDRESS_CHANGED,

    // Others
    EMCB_UDP_DEVICE_COLORS,
} = require('./lib/emcbUDPconstants.js');

module.exports.EmcbUDPbroadcastMaster = require('./lib/emcbUDPbroadcastMaster.js');
module.exports.logger                 = require('./lib/logger.js');

module.exports.EMCB_UDP_BROADCAST_ADDRESS = EMCB_UDP_BROADCAST_ADDRESS
module.exports.EMCB_UDP_PORT              = EMCB_UDP_PORT

module.exports.EMCB_UDP_IMPLEMENTED_PROTOCOL_VERSION        = EMCB_UDP_IMPLEMENTED_PROTOCOL_VERSION
module.exports.EMCB_UDP_MESSAGE_THROTTLE_TIME_MS            = EMCB_UDP_MESSAGE_THROTTLE_TIME_MS
module.exports.EMCB_UDP_LONGEST_IMPLEMENTED_MESSAGE_LENGTH  = EMCB_UDP_LONGEST_IMPLEMENTED_MESSAGE_LENGTH

module.exports.EMCB_UDP_HEADER_START_MASTER = EMCB_UDP_HEADER_START_MASTER
module.exports.EMCB_UDP_HEADER_START_SLAVE  = EMCB_UDP_HEADER_START_SLAVE

module.exports.EMCB_UDP_MESSAGE_CODE_GET_NEXT_SEQUENCE_NUMBER           = EMCB_UDP_MESSAGE_CODE_GET_NEXT_SEQUENCE_NUMBER
module.exports.EMCB_UDP_MESSAGE_CODE_GET_DEVICE_DEBUG_DATA              = EMCB_UDP_MESSAGE_CODE_GET_DEVICE_DEBUG_DATA
module.exports.EMCB_UDP_MESSAGE_CODE_GET_DEVICE_STATUS                  = EMCB_UDP_MESSAGE_CODE_GET_DEVICE_STATUS
module.exports.EMCB_UDP_MESSAGE_CODE_GET_BREAKER_REMOTE_HANDLE_POSITION = EMCB_UDP_MESSAGE_CODE_GET_BREAKER_REMOTE_HANDLE_POSITION
module.exports.EMCB_UDP_MESSAGE_CODE_GET_METER_TELEMETRY_DATA           = EMCB_UDP_MESSAGE_CODE_GET_METER_TELEMETRY_DATA

module.exports.EMCB_UDP_MESSAGE_CODE_SET_NEXT_SEQUENCE_NUMBER           = EMCB_UDP_MESSAGE_CODE_SET_NEXT_SEQUENCE_NUMBER
module.exports.EMCB_UDP_MESSAGE_CODE_SET_BREAKER_REMOTE_HANDLE_POSITION = EMCB_UDP_MESSAGE_CODE_SET_BREAKER_REMOTE_HANDLE_POSITION
module.exports.EMCB_UDP_MESSAGE_CODE_SET_BARGRAPH_LED_TO_USER_DEFINED   = EMCB_UDP_MESSAGE_CODE_SET_BARGRAPH_LED_TO_USER_DEFINED

module.exports.EMCB_UDP_MESSAGE_CODES = EMCB_UDP_MESSAGE_CODES

module.exports.EMCB_UDP_ACK = EMCB_UDP_ACK

module.exports.EMCB_UDP_SET_NEXT_SEQUENCE_NUMBER_RATE_LIMITED             = EMCB_UDP_SET_NEXT_SEQUENCE_NUMBER_RATE_LIMITED
module.exports.EMCB_UDP_SET_NEXT_SEQUENCE_NUMBER_BAD_SEQUENCE_NUMBER = EMCB_UDP_SET_NEXT_SEQUENCE_NUMBER_BAD_SEQUENCE_NUMBER

module.exports.EMCB_UDP_BREAKER_REMOTE_HANDLE_POSITION_OPEN              = EMCB_UDP_BREAKER_REMOTE_HANDLE_POSITION_OPEN
module.exports.EMCB_UDP_BREAKER_REMOTE_HANDLE_POSITION_CLOSED            = EMCB_UDP_BREAKER_REMOTE_HANDLE_POSITION_CLOSED
module.exports.EMCB_UDP_BREAKER_REMOTE_HANDLE_POSITION_FEEDBACK_MISMATCH = EMCB_UDP_BREAKER_REMOTE_HANDLE_POSITION_FEEDBACK_MISMATCH
module.exports.EMCB_UDP_BREAKER_REMOTE_HANDLE_POSITION_TOGGLE            = EMCB_UDP_BREAKER_REMOTE_HANDLE_POSITION_TOGGLE

module.exports.EMCB_UDP_ERROR_TIMEOUT               = EMCB_UDP_ERROR_TIMEOUT
module.exports.EMCB_UDP_ERROR_INVALID_DATA_LENGTH   = EMCB_UDP_ERROR_INVALID_DATA_LENGTH
module.exports.EMCB_UDP_ERROR_PARSER                = EMCB_UDP_ERROR_PARSER

module.exports.EMCB_UDP_EVENT_QUEUE_DRAINED             = EMCB_UDP_EVENT_QUEUE_DRAINED
module.exports.EMCB_UDP_EVENT_DEVICE_DISCOVERED         = EMCB_UDP_EVENT_DEVICE_DISCOVERED
module.exports.EMCB_UDP_EVENT_DEVICE_REMOVED            = EMCB_UDP_EVENT_DEVICE_REMOVED
module.exports.EMCB_UDP_EVENT_DEVICE_IP_ADDRESS_CHANGED = EMCB_UDP_EVENT_DEVICE_IP_ADDRESS_CHANGED

module.exports.EMCB_UDP_DEVICE_COLORS = EMCB_UDP_DEVICE_COLORS