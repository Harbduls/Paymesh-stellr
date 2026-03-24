use soroban_sdk::{contractevent, Address, BytesN, Env};

#[contractevent(data_format = "single-value")]
#[derive(Clone)]
pub struct AutoshareCreated {
    #[topic]
    pub creator: Address,
    pub id: BytesN<32>,
}

#[contractevent]
#[derive(Clone)]
pub struct ContractPaused {}

#[contractevent]
#[derive(Clone)]
pub struct ContractUnpaused {}

#[contractevent(data_format = "single-value")]
#[derive(Clone)]
pub struct AutoshareUpdated {
    #[topic]
    pub updater: Address,
    pub id: BytesN<32>,
}

#[contractevent(data_format = "single-value")]
#[derive(Clone)]
pub struct GroupDeactivated {
    #[topic]
    pub creator: Address,
    pub id: BytesN<32>,
}

#[contractevent(data_format = "single-value")]
#[derive(Clone)]
pub struct GroupActivated {
    #[topic]
    pub creator: Address,
    pub id: BytesN<32>,
}

#[contractevent(data_format = "single-value")]
#[derive(Clone)]
pub struct GroupDeleted {
    #[topic]
    pub deleter: Address,
    pub id: BytesN<32>,
}

#[contractevent(data_format = "single-value")]
#[derive(Clone)]
pub struct AdminTransferred {
    #[topic]
    pub old_admin: Address,
    pub new_admin: Address,
}

#[contractevent(data_format = "single-value")]
#[derive(Clone)]
pub struct Withdrawal {
    #[topic]
    pub token: Address,
    #[topic]
    pub recipient: Address,
    pub amount: i128,
}

#[contractevent(data_format = "single-value")]
#[derive(Clone)]
pub struct Distribution {
    #[topic]
    pub id: BytesN<32>,
    #[topic]
    pub token: Address,
    #[topic]
    pub sender: Address,
    pub amount: i128,
}

#[contractevent(data_format = "single-value")]
#[derive(Clone)]
pub struct GroupNameUpdated {
    #[topic]
    pub updater: Address,
    pub id: BytesN<32>,
}

#[contractevent(data_format = "single-value")]
#[derive(Clone)]
pub struct MemberAdded {
    #[topic]
    pub group_id: BytesN<32>,
    #[topic]
    pub member: Address,
    pub percentage: u32,
}

pub fn emit_member_added(env: &Env, group_id: BytesN<32>, member: Address, percentage: u32) {
    MemberAdded {
        group_id,
        member,
        percentage,
    }
    .publish(env);
}
